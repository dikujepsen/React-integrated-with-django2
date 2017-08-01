import * as types from './actionTypes';
import courseApi from '../api/courseApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import simpleActions from './simpleActions';

export function loadCoursesSuccess(courses) {
    return {type: types.LOAD_COURSES_SUCCESS, courses};
}

export function createCourseSuccess(course) {
  return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function deleteCourseSuccess(course) {
  return {type: types.DELETE_COURSE_SUCCESS, course};
}

let courseActions = new simpleActions(
  {
    loadDataListSuccess: loadCoursesSuccess,
    updateDataItemSuccess: updateCourseSuccess,
    createDataItemSuccess: createCourseSuccess,
    deleteDataItemSuccess: deleteCourseSuccess
  },
  courseApi
);

export default courseActions;
