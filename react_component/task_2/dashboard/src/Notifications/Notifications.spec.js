test('logs "Notification {id} has been marked as read" when a notification is clicked', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  const notifications = [
    { id: 5, type: 'default', value: 'Test log message' }
  ];

  render(<Notifications notifications={notifications} displayDrawer={true} />);
  const li = screen.getByText('Test log message');

  fireEvent.click(li);
  expect(consoleSpy).toHaveBeenCalledWith('Notification 5 has been marked as read');

  consoleSpy.mockRestore();
});
