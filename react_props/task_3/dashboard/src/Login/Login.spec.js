import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Login component', () => {
  test('renders the login paragraph', () => {
    render(<Login />);
    expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
  });

  test('renders two input elements', () => {
    render(<Login />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test('renders a button with the text OK', () => {
    render(<Login />);
    expect(screen.getByRole('button', { name: /ok/i })).toBeInTheDocument();
  });

  test('renders 2 labels, 2 inputs and 1 button', () => {
    render(<Login />);
    const labels = screen.getAllByLabelText(/email|password/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const button = screen.getByRole('button', { name: /ok/i });

    expect(labels.length).toBe(2);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('focuses input when label is clicked', async () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/email/i);
    await userEvent.click(screen.getByLabelText(/email/i));
    expect(emailInput).toHaveFocus();
  });
});
