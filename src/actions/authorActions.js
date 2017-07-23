/**
 * Created by jacob on 29-06-17.
 */
import * as types from './actionTypes';
import authorApi from '../api/mockAuthorApi';
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

export function deleteAuthorSuccess(authorId) {
  return {type: types.DELETE_AUTHOR_SUCCESS, authorId};
}

export function loadAuthors() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return authorApi.getAll().then(authors => {
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
      promise = authorApi.save(author).then(savedAuthor => {
        dispatch(updateAuthorSuccess(savedAuthor))});
    } else {
      promise = authorApi.insert(author).then(savedAuthor => {
        dispatch(createAuthorSuccess(savedAuthor))});
    }
    return promise.catch(error => {
      dispatch(ajaxCallError());
      throw(error);
    });

  };
}

export function deleteAuthor(authorId) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return authorApi.delete(authorId).then(success => {
      if (success) {
        dispatch(deleteAuthorSuccess(authorId));
      }
      return success;
    }).catch(error => {
      if (error.message === 'DELETE_FAILED') {
        dispatch(ajaxCallError());
      }
      throw(error);
    });
  };
}

