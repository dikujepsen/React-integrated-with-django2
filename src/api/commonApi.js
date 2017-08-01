/**
 * Created by jacob on 09-07-17.
 */
import constants from '../constants/constants';

class commonRestApi {
  constructor(module) {
    this.list_action = '/api/' + module + '/';
  }

  handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  getRequest(data, url, method) {
    let csrftoken = $('#container').data('csrftoken');
    let request = new Request(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFTOKEN': csrftoken
      },
      body: JSON.stringify(data),
      credentials: 'same-origin'
    });
    return request;
  }


  getUpdateRequest(data) {
    let request = this.getRequest(data, data.url, "PUT");
    return request;
  }


  getCreateRequest(data) {
    let request = this.getRequest(data, this.list_action, "POST");
    return request;
  }

  getDeleteRequest(data) {
    return this.getRequest(data, data.url, "DELETE");
  }

  getAll() {
    return fetch(this.list_action)
      .then(response => response.json())
      .then(data => data.results);
  }

  save(data) {
    return fetch(this.getUpdateRequest(data))
      .then(this.handleErrors)
      .then(response => response.json());
  }

  insert(data) {
    return fetch(this.getCreateRequest(data))
      .then(this.handleErrors)
      .then(response => response.json());
  }

  delete(data) {
    let savedResponse = undefined;
    return fetch(this.getDeleteRequest(data))
      .then(response => {
        let success = response.ok || response.status === 404;
        if (success) {
          return success;
        }
        savedResponse = response;
        return response.text();
      })
      .then(responseBody => {
        if (responseBody !== true) {
          if (responseBody === constants.DELETE_FAILED) {
            throw Error(responseBody);
          } else {
            this.handleErrors(savedResponse);
          }
        }
        return responseBody;
      });
  }

}



export default commonRestApi;
