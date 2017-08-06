import * as types from '../actions/actionTypes';
import initialState from './initialState';
import SimpleReducer from './simpleReducer';

const reducerSpecific = {
  initialState: initialState.courses,
  dataList: function(action) {
    return action.courses;
  },
  dataItem: function(action) {
    return action.course;
  },
  actionTypes: {
    getAll: types.LOAD_COURSES_SUCCESS,
    add: types.CREATE_COURSE_SUCCESS,
    update: types.UPDATE_COURSE_SUCCESS,
    delete: types.DELETE_COURSE_SUCCESS
  }
};

let courseReducer = SimpleReducer(reducerSpecific);
export default courseReducer;

