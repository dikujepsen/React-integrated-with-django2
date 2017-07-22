/**
 * Created by jacob on 09-07-17.
 */

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

  getRequest(author, url, method) {
    let csrftoken = $('#container').data('csrftoken');
    let request = new Request(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFTOKEN': csrftoken
      },
      body: JSON.stringify(author),
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

  getAll() {
    return fetch(this.api + this.relativeLink)
      .then(response => response.json()
        .then(data => data.results));
  }

  save(data) {
    debugger;
    return fetch(this.getPutRequest(data))
      .then(this.handleErrors)
      .then(() => data);
  }

  insert(data) {
    return fetch(this.getPostRequest(data))
      .then(this.handleErrors)
      .then(response => response.json());
  }

}



export default commonRestApi;
