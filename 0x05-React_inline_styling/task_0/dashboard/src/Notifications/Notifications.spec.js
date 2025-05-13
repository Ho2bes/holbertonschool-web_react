import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Notifications from './Notifications';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('Notifications component update behavior', () => {
  it('does not re-render when notifications length does not change', () => {
    const initialNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
    ];

    const { rerender } = render(
      <Notifications notifications={initialNotifications} displayDrawer={true} />
    );

    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    // Re-render with same length
    const newNotifications = [
      { id: 1, type: 'default', value: 'Updated Notification 1' },
    ];

    rerender(<Notifications notifications={newNotifications} displayDrawer={true} />);

    // Mark as read manually
    const li = screen.getByText('Updated Notification 1');
    fireEvent.click(li);

    // Should log only the markAsRead (not a second render)
    expect(logSpy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    expect(logSpy).not.toHaveBeenCalledWith(
      'Component Notifications is mounted'
    );
  });

  it('re-renders when notifications length increases', () => {
    const initialNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
    ];

    const { rerender } = render(
      <Notifications notifications={initialNotifications} displayDrawer={true} />
    );

    const newNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];

    rerender(<Notifications notifications={newNotifications} displayDrawer={true} />);
    expect(screen.getByText('Notification 2')).toBeInTheDocument();
  });
});
