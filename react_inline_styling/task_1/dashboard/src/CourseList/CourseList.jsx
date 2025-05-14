import React from "react";
import { StyleSheet, css } from "aphrodite";
import CourseListRow from "./CourseListRow";

export default function CourseList({ courses = [] }) {
  return (
    <table className={css(styles.courseList)} id="CourseList">
      {courses.length > 0 ? (
        <>
          <thead>
            <CourseListRow isHeader={true} textFirstCell="Available courses" />
            <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
          </thead>
          <tbody>
            {courses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
              />
            ))}
          </tbody>
        </>
      ) : (
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="No course available yet" />
        </tbody>
      )}
    </table>
  );
}

const styles = StyleSheet.create({
  courseList: {
    width: '100%',
    border: '1px solid #ddd',
    borderCollapse: 'collapse',
    marginTop: '20px',
  }
});
