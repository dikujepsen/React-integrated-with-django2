/**
 * Created by jacob on 28-06-17.
 */
import React from 'react'; import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';

const CourseList = ({courses, deleteCourse}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th>
          &nbsp;
        </th>
        <th>
          &nbsp;
        </th>
        <th>
          Title
        </th>
        <th>
          Author
        </th>
        <th>
          Category
        </th>
        <th>
          Length
        </th>
      </tr>
      </thead>
      <tbody>
      {courses.map(course =>
        <CourseListRow key={course.id} course={course} deleteCourse={deleteCourse} />
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired,
  deleteCourse: PropTypes.func.isRequired
};

export default CourseList;
