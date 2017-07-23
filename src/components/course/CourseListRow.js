/**
 * Created by jacob on 28-06-17.
 */
import React from 'react'; import PropTypes from 'prop-types';
import {Link} from 'react-router';

const CourseListRow = ({course, deleteCourse}) => {
  return (
    <tr>
      <td>
        <button type="button"
                onClick={deleteCourse}
                data-id={course.id}
                className="btn btn-primary">Delete</button>
      </td>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/courses/' + course.id}>{course.title} </Link></td>
      <td>{course.author_name}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired,
  deleteCourse: PropTypes.func.isRequired
};

export default CourseListRow;
