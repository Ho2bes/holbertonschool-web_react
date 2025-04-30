import React from 'react';
import { render, screen } from '@testing-library/react';
import CourseList from './CourseList';

describe('CourseList component', () => {
  const courses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  test('renders 5 rows when given a list of courses', () => {
    render(<CourseList courses={courses} />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(5); // 2 headers + 3 course rows
  });

  test('renders 3 rows when given an empty course list', () => {
    render(<CourseList courses={[]} />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(3); // 2 headers + 1 "no course available yet"
    expect(screen.getByText(/no course available yet/i)).toBeInTheDocument();
  });
});
