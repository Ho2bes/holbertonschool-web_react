import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import userEvent from '@testing-library/user-event';
import { getLatestNotification } from '../utils/utils';

const mockStore = configureStore([]);
const mockAxios = new MockAdapter(axios);

const renderWithStore = (store) => {
  return render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};

afterEach(() => {
  mockAxios.reset();
});

describe('App integration with Redux', () => {
  test('renders Login when user is not logged in', () => {
    const store = mockStore({
      auth: { isLoggedIn: false, user: { email: '', password: '' } },
      notifications: { items: [], displayDrawer: false },
      courses: { items: [] },
    });

    renderWithStore(store);
    expect(screen.getByText(/log in to continue/i)).toBeInTheDocument();
  });

  test('renders CourseList when user is logged in', () => {
    const store = mockStore({
      auth: { isLoggedIn: true, user: { email: 'test@example.com', password: 'pass' } },
      notifications: { items: [], displayDrawer: false },
      courses: {
        items: [
          { id: 1, name: 'React', credit: 40 },
          { id: 2, name: 'Webpack', credit: 20 },
        ],
      },
    });

    renderWithStore(store);
    expect(screen.getByText(/course list/i)).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  test('fetches and displays notifications on mount', async () => {
    const fakeNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];
    mockAxios.onGet(/notifications/).reply(200, { notifications: fakeNotifications });

    const store = mockStore({
      auth: { isLoggedIn: false, user: { email: '', password: '' } },
      notifications: { items: [], displayDrawer: true },
      courses: { items: [] },
    });

    renderWithStore(store);

    await waitFor(() => {
      expect(screen.getByText('New course available')).toBeInTheDocument();
      expect(screen.getByText('New resume available')).toBeInTheDocument();
      expect(screen.getByText(/urgent requirement/i)).toBeInTheDocument();
    });
  });

  test('displays course list after login flow', async () => {
    const store = mockStore({
      auth: { isLoggedIn: false, user: { email: '', password: '' } },
      notifications: { items: [], displayDrawer: false },
      courses: { items: [] },
    });

    renderWithStore(store);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /ok/i });

    await userEvent.type(emailInput, 'test@example.com');
    await userEvent.type(passwordInput, 'password123');
    await userEvent.click(submitButton);
  });
});
