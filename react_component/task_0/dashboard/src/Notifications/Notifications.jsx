import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import closeIcon from '../assets/close-button.png';

function Notifications({ displayDrawer = false, notifications = [] }) {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <>
      <div className="notifications-title">Your notifications</div>

      {displayDrawer && (
        <div className="notifications">
          <button
            aria-label="Close"
            onClick={handleClick}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <img src={closeIcon} alt="close icon" style={{ width: '10px', height: '10px' }} />
          </button>

          <p>
            {notifications.length === 0
              ? 'No new notification for now'
              : 'Here is the list of notifications'}
          </p>

          {notifications.length > 0 && (
            <ul>
              {notifications.map((notif) => (
                <NotificationItem
                  key={notif.id}
                  type={notif.type}
                  value={notif.value}
                  html={notif.html}
                />
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
}

export default Notifications;
