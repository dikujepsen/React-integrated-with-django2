import delay from './delay';
import commonApi from './commonApi';

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







class AuthorApi {
  static getAllAuthors() {
    return fetch('/api/authors/')
      .then(response => response.json()
        .then(data => data.results));
  }


  static saveAuthor(author) {
    return fetch(commonApi.getPutRequest(author))
      .then(commonApi.handleErrors)
      .then(() => author);
  }

  static insertAuthor(author) {
    return fetch(commonApi.getPostRequest(author))
      .then(commonApi.handleErrors)
      .then(response => response.json());
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
