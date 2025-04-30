import './Notifications.css';
import React from 'react';
import closeIcon from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

export default function Notifications({ notifications = [] }) {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="notifications">
      {/* Bouton Close */}
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

      {/* Message */}
      <p>Here is the list of notifications</p>

      {/* Liste dynamique des notifications */}
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
    </div>
  );
}
