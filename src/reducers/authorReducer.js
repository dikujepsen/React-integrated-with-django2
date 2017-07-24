import * as types from '../actions/actionTypes';
import initialState from './initialState';
import SimpleReducer from './simpleReducer';

const reducerSpecific = {
  initialState: initialState.authors,
  dataList: function(action) {
    return action.authors;
  },
  dataItem: function(action) {
    return action.author;
  },
  actionTypes: {
    getAll: types.LOAD_AUTHORS_SUCCESS,
    add: types.CREATE_AUTHOR_SUCCESS,
    update: types.UPDATE_AUTHOR_SUCCESS,
    delete: types.DELETE_AUTHOR_SUCCESS
  }
};

let authorReducer = SimpleReducer(reducerSpecific);
export default authorReducer

