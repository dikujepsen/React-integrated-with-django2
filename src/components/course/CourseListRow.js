/**
 * Created by jacob on 28-06-17.
 */
import React from 'react'; import PropTypes from 'prop-types';
import {Link} from 'react-router';

const CourseListRow = ({course}) => {
  return (
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/courses/' + course.id}>{course.title} </Link></td>
      <td>{course.author_name}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseListRow;
