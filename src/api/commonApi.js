/**
 * Created by jacob on 09-07-17.
 */



function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function getRequest(author, url, method) {
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

let api = '/api/';

function getPutRequest(data, relativeLink) {
  let request = getRequest(data, api + relativeLink + data.id + '/', "PUT");
  return request;
}


function getPostRequest(data, relativeLink) {
  let request = getRequest(data, api + relativeLink, "POST");
  return request;
}


const commonApi = {
  getPutRequest: getPutRequest,
  getPostRequest: getPostRequest,
  handleErrors: handleErrors
};

export default commonApi;
