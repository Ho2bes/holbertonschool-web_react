import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Login() {
  return (
    <div className={css(styles.body)}>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.inputGroup)}>
        <label htmlFor="email" className={css(styles.label)}>Email:</label>
        <input id="email" type="email" className={css(styles.input)} />
      </div>
      <div className={css(styles.inputGroup)}>
        <label htmlFor="password" className={css(styles.label)}>Password:</label>
        <input id="password" type="password" className={css(styles.input)} />
      </div>
      <button className={css(styles.button)}>OK</button>
    </div>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: '40px',
    fontSize: '1rem',
  },
  inputGroup: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',

    '@media (max-width: 900px)': {
      display: 'block',
    },
  },
  label: {
    marginRight: '10px',
    '@media (max-width: 900px)': {
      display: 'block',
      marginBottom: '5px',
    },
  },
  input: {
    '@media (max-width: 900px)': {
      width: '100%',
      marginBottom: '10px',
    },
  },
  button: {
    '@media (max-width: 900px)': {
      display: 'block',
      width: '100%',
    },
  },
});
