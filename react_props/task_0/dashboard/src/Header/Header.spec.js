import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders the main heading and logo', () => {
  render(<Header />);
  const heading = screen.getByRole('heading', { name: /school dashboard/i });
  const image = screen.getByAltText(/holberton logo/i);
  expect(heading).toBeInTheDocument();
  expect(image).toBeInTheDocument();
});
