import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import NotificationItem from './NotificationItem';
import closebtn from '../assets/close-button.png';
import PropTypes from 'prop-types';

class Notifications extends React.Component {
  render() {
    const { notifications, displayDrawer } = this.props;

    return (
      <>
        {!displayDrawer && (
          <div className={css(styles.menuItem)} id="menuItem">
            Your notifications
          </div>
        )}

        {displayDrawer && (
          <div className={css(styles.notifications)} id="notifications">
            <button
              className={css(styles.closeButton)}
              onClick={() => console.log('Close button has been clicked')}
              aria-label="Close"
            >
              <img src={closebtn} alt="Close" className={css(styles.closeIcon)} />
            </button>
            <p className={css(styles.title)}>Here is the list of notifications</p>
            <ul className={css(styles.ul)}>
              {notifications.map((n) => (
                <NotificationItem key={n.id} {...n} />
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

const fadeIn = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};

const bounce = {
  '0%': { transform: 'translateY(0px)' },
  '50%': { transform: 'translateY(-5px)' },
  '100%': { transform: 'translateY(5px)' },
};

const styles = StyleSheet.create({
  menuItem: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: '#fff8f8',
    padding: '10px',
    cursor: 'pointer',
    zIndex: 1000,
    ':hover': {
      animationName: [fadeIn, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3',
    },
  },
  notifications: {
    position: 'absolute',
    top: '0',
    right: '0',
    border: '2px dashed red',
    backgroundColor: 'white',
    zIndex: 10,
    width: '300px',
    padding: '10px',

    '@media (max-width: 900px)': {
      width: '100vw',
      height: '100vh',
      fontSize: '20px',
      border: 'none',
      padding: 0,
    },
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  closeIcon: {
    width: '10px',
    height: '10px',
  },
  title: {
    marginTop: '30px',
    '@media (max-width: 900px)': {
      fontSize: '20px',
      margin: '20px 0 10px 10px',
    },
  },
  ul: {
    listStyle: 'none',
    padding: '10px',
    margin: 0,

    '@media (max-width: 900px)': {
      padding: 0,
    },
  },
});

Notifications.propTypes = {
  notifications: PropTypes.array,
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  notifications: [],
  displayDrawer: false,
};

export default Notifications;
