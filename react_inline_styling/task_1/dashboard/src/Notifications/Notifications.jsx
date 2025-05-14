import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import closebtn from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

class Notifications extends React.Component {
  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.notifications.length !== this.props.notifications.length;
  }

  render() {
    const { notifications, displayDrawer } = this.props;

    return (
      <>
        <div className={css(styles.notificationsTitle)}>
          <p>Your notifications</p>
        </div>
        {displayDrawer ? (
          <div className={css(styles.notifications)}>
            {notifications.length > 0 ? (
              <>
                <p>Here is the list of notifications</p>
                <button
                  className={css(styles.closeButton)}
                  onClick={() => console.log('Close button has been clicked')}
                  aria-label="Close"
                >
                  <img src={closebtn} alt="Close" className={css(styles.closeIcon)} />
                </button>
                <ul className={css(styles.list)}>
                  {notifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      id={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </>
            ) : (
              <p>No new notification for now</p>
            )}
          </div>
        ) : null}
      </>
    );
  }
}

const styles = StyleSheet.create({
  notificationsTitle: {
    position: 'absolute',
    right: '0',
    padding: '10px',
    marginRight: '10px',
  },
  notifications: {
    border: '2px dashed red',
    padding: '10px',
    width: '300px',
    position: 'absolute',
    top: '0',
    right: '0',
    backgroundColor: 'white',
    zIndex: 100,
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
  },
  closeIcon: {
    height: '10px',
    width: '10px',
  },
  list: {
    marginTop: '30px',
    paddingLeft: '20px',
  },
});

export default Notifications;
