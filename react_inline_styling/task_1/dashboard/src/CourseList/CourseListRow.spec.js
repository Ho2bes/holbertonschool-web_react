import { render, screen } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

describe('When isHeader is true', () => {
  test('Check whether the component renders one columnheader that has the attributecolspan = 2', () => {
    render(
      <table>
        <tbody>
        <CourseListRow isHeader={true} textFirstCell="test OnlyOneCell" />
        </tbody>
      </table>
  );

    const cols = screen.getAllByRole('columnheader');

    expect(cols).toHaveLength(1);
    expect(cols[0]).toHaveAttribute('colspan', '2');
  })
  test('Check whether the component renders 2 <th> cells', () => {
    render(
      <table>
        <tbody>
        <CourseListRow isHeader={true} textFirstCell="test firstCell" textSecondCell="testSecondCell" />
        </tbody>
      </table>
  );

    const cols = screen.getAllByRole('columnheader');

    expect(cols).toHaveLength(2);
  })
});

describe('When isHeader is false', () => {
  test('Check to test the component renders correctly two td elements within a tr element', () => {
    render(
      <table>
        <tbody>
        <CourseListRow isHeader={false} textFirstCell="test firstCell" textSecondCell="testSecondCell" />
        </tbody>
      </table>
  );
  const row = screen.getByRole('row');
  const cells = screen.getAllByRole('cell');

  expect(row).toBeInTheDocument();
  expect(cells).toHaveLength(2);

  expect(cells[0]).toHaveTextContent("test firstCell");
  expect(cells[1]).toHaveTextContent("testSecondCell");
  })
})

test('When isHeader is true and textSecondCell is null, background-color is #deb5b545', () => {
  render(
    <table>
      <tbody>
        <CourseListRow isHeader={true} textFirstCell="Only one header" />
      </tbody>
    </table>
  );
  const row = screen.getByRole('row');
  expect(row).toHaveStyle({ backgroundColor: 'rgba(222, 181, 181, 0.27)' }); // #deb5b545 en rgba
});

test('When isHeader is true and textSecondCell is set, background-color is #deb5b545', () => {
  render(
    <table>
      <tbody>
        <CourseListRow isHeader={true} textFirstCell="Header 1" textSecondCell="Header 2" />
      </tbody>
    </table>
  );
  const row = screen.getByRole('row');
  expect(row).toHaveStyle({ backgroundColor: 'rgba(222, 181, 181, 0.27)' });
});

test('When isHeader is false, background-color is #f5f5f5ab', () => {
  render(
    <table>
      <tbody>
        <CourseListRow isHeader={false} textFirstCell="Data 1" textSecondCell="Data 2" />
      </tbody>
    </table>
  );
  const row = screen.getByRole('row');
  expect(row).toHaveStyle({ backgroundColor: 'rgba(245, 245, 245, 0.67)' }); // #f5f5f5ab en rgba
});
