import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, markAsRead, id } = this.props;
    const styleClass = type === 'urgent' ? styles.urgent : styles.default;

    if (html) {
      return (
        <li
          data-notification-type={type}
          className={css(styleClass)}
          dangerouslySetInnerHTML={html}
          onClick={() => markAsRead(id)}
        ></li>
      );
    }

    return (
      <li
        data-notification-type={type}
        className={css(styleClass)}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    );
  }
}

const styles = StyleSheet.create({
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
});

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
};

export default NotificationItem;
