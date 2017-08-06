/**
 * Created by jacob on 26-06-17.
 */
import React from 'react'; import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
import toastr from 'toastr';
import Pager from '../common/Pager';

class CoursesPage extends React.Component {
  constructor(props, context){
    super(props, context);
    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  redirectToAddCoursePage(event) {
    browserHistory.push('/courses/add/');
  }

  nextPage(event) {
    event.preventDefault();
    this.props.actions.loadNextPage(this.props.courses);
  }

  previousPage(event) {
    event.preventDefault();
    this.props.actions.loadPreviousPage(this.props.courses);
  }

  deleteCourse(event) {
    event.preventDefault();
    let courseId = $(event.target).data('id');
    let course = this.props.courses.results.filter(course => course.id === courseId)[0];
    this.props.actions.deleteDataItem(course)
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
    const courses = this.props.courses.results;
    return (
      <div >
        <h1>Courses</h1>
        <input type="submit"
               value="Add Course"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage} />
        <CourseList courses={courses}
                    deleteCourse={this.deleteCourse} />
        <Pager
          dataList={this.props.courses}
          nextPage={this.nextPage}
          previousPage={this.previousPage}
        />
      </div>
    );
  }
}

CoursesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.object.isRequired
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
