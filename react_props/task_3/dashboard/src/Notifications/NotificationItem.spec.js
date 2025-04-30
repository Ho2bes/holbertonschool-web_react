import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  test('renders a default type with blue color', () => {
    render(<NotificationItem type="default" value="Test default" />);
    const item = screen.getByText('Test default');
    expect(item).toHaveAttribute('data-notification-type', 'default');
    expect(item).toHaveStyle('color: blue');
  });

  test('renders an urgent type with red color', () => {
    render(<NotificationItem type="urgent" value="Test urgent" />);
    const item = screen.getByText('Test urgent');
    expect(item).toHaveAttribute('data-notification-type', 'urgent');
    expect(item).toHaveStyle('color: red');
  });
});
