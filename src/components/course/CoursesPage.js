/**
 * Created by jacob on 26-06-17.
 */
import React from 'react'; import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

class CoursesPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
  }


  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  redirectToAddCoursePage(event) {
    browserHistory.push('/courses/add/');
  }


  deleteCourse(event) {
    event.preventDefault();
    let courseId = $(event.target).data('id');
    let course = this.props.courses.filter(course => course.id === courseId)[0];
    this.props.actions.deleteCourse(course)
      .then(success => {
        if (success) {
          toastr.success("Course deleted");
        }
      })
      .catch(error => {
        toastr.error(error);
      });
  }

  render() {
    const {courses} = this.props;
    return (
      <div >
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage} />
        <CourseList courses={courses}
                    deleteCourse={this.deleteCourse} />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions : bindActionCreators(courseActions, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
