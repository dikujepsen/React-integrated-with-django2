import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const authors = [
  {
    id: 'cory-house',
    firstName: 'Cory',
    lastName: 'House'
  },
  {
    id: 'scott-allen',
    firstName: 'Scott',
    lastName: 'Allen'
  },
  {
    id: 'dan-wahlin',
    firstName: 'Dan',
    lastName: 'Wahlin'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (author) => {
  return author.firstName.toLowerCase() + '-' + author.lastName.toLowerCase();
};


function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

class AuthorApi {
  static getAllAuthors() {
    return fetch('/api/authors/')
      .then(response => response.json()
        .then(data => data.results));
  }

  static saveAuthor(author) {
    let csrftoken = $('#container').data('csrftoken');
    return fetch('http://localhost:8000/api/authors/' + author.id + '/',
      {
        method: "PUT",
        headers: {'Content-Type': 'application/json',
                  'X-CSRFTOKEN': csrftoken},
        body: JSON.stringify(author),
        credentials: 'same-origin'})
      .then(handleErrors)
      .then(() => author);
  }

  static deleteAuthor(authorId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfAuthorToDelete = authors.findIndex(author => {
          author.id == authorId;
        });
        authors.splice(indexOfAuthorToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default AuthorApi;
