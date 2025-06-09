import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import { getLatestNotification } from '../../utils/utils';
import { StyleSheetTestUtils } from "aphrodite";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import notificationsReducer, {
  markNotificationAsRead,
  showNotificationDrawer,
  hideNotificationDrawer
} from '../../redux/notifications/notificationsSlice';

// Mock des actions
jest.mock('../../redux/notifications/notificationsSlice', () => ({
  ...jest.requireActual('../../redux/notifications/notificationsSlice'),
  markNotificationAsRead: jest.fn((id) => ({ type: 'notifications/markNotificationAsRead', payload: id })),
  showNotificationDrawer: jest.fn(() => ({ type: 'notifications/showNotificationDrawer' })),
  hideNotificationDrawer: jest.fn(() => ({ type: 'notifications/hideNotificationDrawer' })),
}));

const renderWithRedux = (ui, { preloadedState } = {}) => {
  const store = configureStore({
    reducer: {
      notifications: () => preloadedState || {},
    },
  });
  return render(<Provider store={store}>{ui}</Provider>);
};

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  jest.clearAllMocks();
});

test('Displays 3 notifications when displayDrawer is true', () => {
  const preloadedState = {
    displayDrawer: true,
    items: [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
    ]
  };

  renderWithRedux(<Notifications />, { preloadedState });

  expect(screen.getByText('Here is the list of notifications')).toBeInTheDocument();
  expect(screen.getAllByRole('listitem')).toHaveLength(3);
});

test('Displays "No new notifications for now" if notifications array is empty', () => {
  const preloadedState = {
    displayDrawer: true,
    items: []
  };

  renderWithRedux(<Notifications />, { preloadedState });

  expect(screen.getByText(/no new notifications for now/i)).toBeInTheDocument();
});

test('Does not display notifications if displayDrawer is false', () => {
  const preloadedState = {
    displayDrawer: false,
    items: [
      { id: 1, type: 'default', value: 'New course available' }
    ]
  };

  renderWithRedux(<Notifications />, { preloadedState });

  expect(screen.queryByText('Here is the list of notifications')).not.toBeInTheDocument();
  expect(screen.queryAllByRole('listitem')).toHaveLength(0);
});

test('Clicking "Your notifications" dispatches showNotificationDrawer', () => {
  const preloadedState = {
    displayDrawer: false,
    items: []
  };

  renderWithRedux(<Notifications />, { preloadedState });

  fireEvent.click(screen.getByText(/your notifications/i));
  expect(showNotificationDrawer).toHaveBeenCalled();
});

test('Clicking close button dispatches hideNotificationDrawer', () => {
  const preloadedState = {
    displayDrawer: true,
    items: [
      { id: 1, type: 'default', value: 'dummy value' }
    ]
  };

  renderWithRedux(<Notifications />, { preloadedState });

  fireEvent.click(screen.getByLabelText('Close'));
  expect(hideNotificationDrawer).toHaveBeenCalled();
});

test('Clicking a notification calls markNotificationAsRead with the correct ID', () => {
  const preloadedState = {
    displayDrawer: true,
    items: [
      { id: 1, type: 'default', value: 'Mark me' }
    ]
  };

  renderWithRedux(<Notifications />, { preloadedState });

  fireEvent.click(screen.getByText('Mark me'));
  expect(markNotificationAsRead).toHaveBeenCalledWith(1);
});

test('Displays the correct notification colors', () => {
  const preloadedState = {
    displayDrawer: true,
    items: [
      { id: 1, type: 'default', value: 'Default color' },
      { id: 2, type: 'urgent', value: 'Urgent color' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
    ]
  };

  renderWithRedux(<Notifications />, { preloadedState });

  const listItems = screen.getAllByRole('listitem');
  expect(listItems).toHaveLength(3);
  expect(listItems[0].style.color).toBe('blue');
  expect(listItems[1].style.color).toBe('red');
  expect(listItems[2].style.color).toBe('red');
});

test('Is a functional memoized component', () => {
  expect(typeof Notifications.type).toBe('function');
  expect(Notifications.$$typeof.toString()).toBe('Symbol(react.memo)');
});
