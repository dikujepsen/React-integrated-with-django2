/**
 * Created by jacob on 29-06-17.
 */
import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function loadAuthorsSuccess(authors) {
  return {type: types.LOAD_AUTHORS_SUCCESS, authors};
}

export function createAuthorSuccess(author) {
  return {type: types.CREATE_AUTHOR_SUCCESS, author};
}

export function updateAuthorSuccess(author) {
  return {type: types.UPDATE_AUTHOR_SUCCESS, author};
}



export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return AuthorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveAuthor(author) {
  return function(dispatch, getState) {
    dispatch(beginAjaxCall());
    let promise = undefined;
    if (author.id) {
      promise = AuthorApi.saveAuthor(author).then(savedAuthor => {
        dispatch(updateAuthorSuccess(savedAuthor))});
    } else {
      debugger;
      promise = AuthorApi.insertAuthor(author).then(savedAuthor => {
        dispatch(createAuthorSuccess(savedAuthor))});
    }
    return promise.catch(error => {
      dispatch(ajaxCallError(error));
      throw(error);
    });

  };
}

