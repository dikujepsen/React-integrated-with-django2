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


function getPutRequest(author) {
  let request = getRequest(author, 'http://localhost:8000/api/authors/' + author.id + '/', "PUT");
  return request;
}


function getPostRequest(author) {
  let request = getRequest(author, 'http://localhost:8000/api/authors/', "POST");
  return request;
}


const commonApi = {
  getPutRequest: getPutRequest,
  getPostRequest: getPostRequest,
  handleErrors: handleErrors
};

export default commonApi;
