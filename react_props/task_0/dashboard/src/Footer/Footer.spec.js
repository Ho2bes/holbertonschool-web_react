import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders the footer content', () => {
  render(<Footer />);
  expect(screen.getByText(/copyright/i)).toBeInTheDocument();
});
