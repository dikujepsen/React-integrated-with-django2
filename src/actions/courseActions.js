import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function loadCoursesSuccess(courses) {
    return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}



export function loadCourses() {
    return function(dispatch) {
      dispatch(beginAjaxCall());
      return courseApi.getAllCourses().then(courses => {
        dispatch(loadCoursesSuccess(courses));
      }).catch(error => {
        throw(error);
      });
    };
}

export function saveCourse(course) {
  return function(dispatch, getState){
    dispatch(beginAjaxCall());
    let promise = undefined;
    if (course.id) {
      promise = courseApi.saveCourse(course).then(savedCourse => {
        dispatch(updateCourseSuccess(savedCourse))});
    } else {
      promise = courseApi.insertCourse(course).then(savedCourse => {
        dispatch(createCourseSuccess(savedCourse))});
    }
    return promise.catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });

  }

}
