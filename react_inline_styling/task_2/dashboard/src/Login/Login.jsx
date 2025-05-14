import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Login() {
  return (
    <div className={css(styles.body)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">
        Email:
        <input id="email" type="email" className={css(styles.input)} />
      </label>
      <label htmlFor="password">
        Password:
        <input id="password" type="password" className={css(styles.input)} />
      </label>
      <button className={css(styles.button)}>OK</button>
    </div>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: '40px',
    fontSize: '1rem',
  },
  input: {
    margin: '0 10px',
  },
  button: {
    marginLeft: '10px',
    padding: '4px 8px',
    backgroundColor: '#e0354b',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
});
