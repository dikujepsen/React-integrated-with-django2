import commonRestApi from './commonApi';

class AuthorApi extends commonRestApi {
  constructor(relativeLink) {
    super(relativeLink);
  }

}

let authorApi = new AuthorApi('authors/')

export default authorApi;
