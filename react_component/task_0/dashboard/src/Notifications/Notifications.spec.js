import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

const sampleNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
];

describe('Notifications component', () => {
  test('always displays "Your notifications"', () => {
    render(<Notifications />);
    expect(screen.getByText(/your notifications/i)).toBeInTheDocument();
  });

  test('does not render drawer elements when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.queryByText(/here is the list/i)).not.toBeInTheDocument();
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  test('renders drawer elements when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} notifications={sampleNotifications} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });

  test('renders "No new notification for now" if notifications is empty', () => {
    render(<Notifications displayDrawer={true} notifications={[]} />);
    expect(screen.getByText(/no new notification for now/i)).toBeInTheDocument();
  });
});
