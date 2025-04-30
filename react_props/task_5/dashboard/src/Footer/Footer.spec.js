import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getCurrentYear } from '../utils/utils';

test('renders the footer content with correct text when isIndex is true', () => {
  render(<Footer />);
  const year = getCurrentYear();
  const expectedText = `Copyright ${year} - Holberton School`;
  expect(screen.getByText(expectedText)).toBeInTheDocument();
});
