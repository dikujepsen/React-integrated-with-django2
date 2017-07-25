import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import toastr from 'toastr';

function setValidationError(message) {
  toastr.error(message);
}


function IsEmpty(value, message) {
  if (value === '') {
    toastr.error(message + ' is required');
    return true;
  }
  return false;
}

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);


    let isEdit = props.params.id !== 'add';
    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false,
      isEdit: isEdit
    };

    this.saveCourse = this.saveCourse.bind(this);
    this.updateCourseState = this.updateCourseState.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id !== nextProps.course.id) {
      this.setState({course: Object.assign({}, nextProps.course)});
    }
  }

  updateCourseState(event) {
    const field = event.target.name;
    let course = this.state.course;
    course[field] = event.target.value;
    return this.setState({course: course});
  }


  isValid(course) {

    return IsEmpty(course.title, 'Title') ||
      IsEmpty(course.watchHref, 'Watch link') ||
      IsEmpty(course.author_id, 'Author') ||
      IsEmpty(course.category, 'Category') ||
      IsEmpty(course.length, 'Length');
  }

  saveCourse(event) {
    event.preventDefault();


    let course = this.state.course;


    if (this.isValid(course)) {
      return;
    }

    this.setState({saving: true});
    this.props.actions.saveCourse(this.state.course)
      .then(() => this.redirect())
      .catch(error => {
        toastr.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    toastr.success('Course saved');
    this.context.router.push('/courses');
  }

  render() {
    return (
      <CourseForm
        allAuthors={this.props.authors}
        onSave ={this.saveCourse}
        onChange={this.updateCourseState}
        course={this.state.course}
        errors ={this.state.errors}
        saving={this.state.saving}
        isEdit={this.state.isEdit}
      />
    );
  }
}


ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
  router: PropTypes.object
};

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id === id);
  if (course.length) return course[0];
  return null;
}

function mapStateToProps(state, ownProps) {
  const courseId = parseInt(ownProps.params.id);

  let course = {id: '', watchHref: '', title: '', author_id: '', length: '', category: ''};

  if (courseId && state.courses.length) {
    course = getCourseById(state.courses, courseId);
  }

  const authorsFormattedForDropdown = state.authors.map(author => {

    return {
      value: author.id,
      text: author.firstName + ' ' + author.lastName
    };
  });

  return {
    course: course,
    authors: authorsFormattedForDropdown
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
