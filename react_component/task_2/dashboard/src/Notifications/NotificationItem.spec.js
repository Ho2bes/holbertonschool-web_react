import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NotificationItem from './NotificationItem';

test('calls markAsRead with the correct ID when clicked', () => {
  const mockMarkAsRead = jest.fn();
  render(
    <NotificationItem
      id={42}
      type="default"
      value="Click me"
      markAsRead={mockMarkAsRead}
    />
  );

  const li = screen.getByText('Click me');
  fireEvent.click(li);
  expect(mockMarkAsRead).toHaveBeenCalledWith(42);
});
test('renders the correct HTML when passed as a prop', () => {
  const html = { __html: '<strong>HTML content</strong>' };
  render(
    <NotificationItem
      id={42}
      type="default"
      html={html}
      markAsRead={() => {}}
    />
  );

  const li = screen.getByText('HTML content');
  expect(li).toBeInTheDocument();
  expect(li).toHaveStyle({ color: 'blue' });
});

