function NotificationItem({ type = 'default', value, html }) {
  return (
    <li
      data-notification-type={type}
      style={{ color: type === 'urgent' ? 'red' : 'blue' }}
      {...(html ? { dangerouslySetInnerHTML: html } : {})}
    >
      {!html && value}
    </li>
  );
}

export default NotificationItem;
