import * as types from '../actions/actionTypes';
import initialState from './initialState';


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


export default function courseReducer(state = reducerSpecific.initialState, action) {
  switch(action.type) {
    case reducerSpecific.actionTypes.getAll:
      return reducerSpecific.dataList(action);
    case reducerSpecific.actionTypes.add:
      return [
        ...state,
        Object.assign({}, reducerSpecific.dataItem(action))
      ];
    case reducerSpecific.actionTypes.update:
      return [
        ...state.filter(dataItem => dataItem.id !== reducerSpecific.dataItem(action).id),
        Object.assign({}, reducerSpecific.dataItem(action))
      ];
    case reducerSpecific.actionTypes.delete:
      return [
        ...state.filter(dataItem => dataItem.id !== reducerSpecific.dataItem(action).id)
      ];

    default:
      return state;
  }
}
