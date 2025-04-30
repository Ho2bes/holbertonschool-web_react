import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders the main heading', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1, name: /school dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  test('renders the login form when isLoggedIn is false', () => {
    render(<App isLoggedIn={false} />);
    expect(screen.getByText(/login to access the full dashboard/i)).toBeInTheDocument();
  });

  test('renders the CourseList when isLoggedIn is true', () => {
    render(<App isLoggedIn={true} />);
    expect(screen.getByText(/available courses/i)).toBeInTheDocument();
    expect(screen.getByText(/course name/i)).toBeInTheDocument();
    expect(screen.getByText(/credit/i)).toBeInTheDocument();
  });

  test('renders the Holberton logo image', () => {
    render(<App />);
    const image = screen.getByAltText(/holberton logo/i);
    expect(image).toBeInTheDocument();
  });

  test('renders email and password inputs and button when not logged in', () => {
    render(<App isLoggedIn={false} />);
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ok/i })).toBeInTheDocument();
  });

  test('renders the footer text', () => {
    render(<App />);
    expect(screen.getByText(/copyright/i)).toBeInTheDocument();
  });
});
