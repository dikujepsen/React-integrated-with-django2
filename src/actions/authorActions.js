/**
 * Created by jacob on 29-06-17.
 */
import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';
import simpleActions from './simpleActions';

export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function createAuthorSuccess(author) {
  return {type: types.CREATE_AUTHOR_SUCCESS, author};
}

export function updateAuthorSuccess(author) {
  return {type: types.UPDATE_AUTHOR_SUCCESS, author};
}

export function deleteAuthorSuccess(author) {
  return {type: types.DELETE_AUTHOR_SUCCESS, author};
}


let authorActions = new simpleActions(
  {
    loadDataListSuccess: loadAuthorsSuccess,
    updateDataItemSuccess: updateAuthorSuccess,
    createDataItemSuccess: createAuthorSuccess,
    deleteDataItemSuccess: deleteAuthorSuccess
  },
  authorApi
);

export default authorActions;
