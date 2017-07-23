/**
 * Created by jacob on 09-07-17.
 */
import constants from '../constants/constants';

class commonRestApi {
  constructor(relativeLink) {
    this.relativeLink = relativeLink;
    this.api = '/api/';
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



  getPutRequest(data) {
    let request = this.getRequest(data, this.api + this.relativeLink + data.id + '/', "PUT");
    return request;
  }


  getPostRequest(data) {
    let request = this.getRequest(data, this.api + this.relativeLink, "POST");
    return request;
  }

  getDeleteRequest(id) {
    return this.getRequest(id, this.api + this.relativeLink + id + '/', "DELETE");
  }

  getAll() {
    return fetch(this.api + this.relativeLink)
      .then(response => response.json()
        .then(data => data.results));
  }

  save(data) {
    return fetch(this.getPutRequest(data))
      .then(this.handleErrors)
      .then(response => response.json());
  }

  insert(data) {
    return fetch(this.getPostRequest(data))
      .then(this.handleErrors)
      .then(response => response.json());
  }

  delete(id) {
    let savedResponse = undefined;
    return fetch(this.getDeleteRequest(id))
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
