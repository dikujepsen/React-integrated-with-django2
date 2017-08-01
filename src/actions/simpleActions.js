/**
 * Created by jacob on 29-06-17.
 */
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


class simpleActions {
  constructor(actions, api) {
    this.actions = actions;
    this.api = api;

    this.loadAll = this.loadAll.bind(this);
    this.saveDataItem = this.saveDataItem.bind(this);
    this.deleteDataItem = this.deleteDataItem.bind(this);
  }

  loadAll() {
    return dispatch => {
      dispatch(beginAjaxCall());
      return this.api.getAll().then(dataList => {
        dispatch(this.actions.loadDataListSuccess(dataList));
      }).catch(error => {
        throw(error);
      });
    };
  }

  saveDataItem(dataItem) {
    return (dispatch, getState) => {
      dispatch(beginAjaxCall());
      let promise = undefined;
      if (dataItem.id) {
        promise = this.api.save(dataItem).then(savedDataItem => {
          dispatch(this.actions.updateDataItemSuccess(savedDataItem))});
      } else {
        promise = this.api.insert(dataItem).then(savedDataItem => {
          dispatch(this.actions.createDataItemSuccess(savedDataItem))});
      }
      return promise.catch(error => {
        dispatch(ajaxCallError());
        throw(error);
      });

    };
  }

  deleteDataItem(dataItem) {
    return (dispatch) => {
      dispatch(beginAjaxCall());
      return this.api.delete(dataItem).then(success => {
        if (success) {
          dispatch(this.actions.deleteDataItemSuccess(dataItem));
        }
        return success;
      }).catch(error => {
        dispatch(ajaxCallError());
        throw(error);
      });
    };
  }

}


export default simpleActions;


