import commonRestApi from './commonApi';

class AuthorApi extends commonRestApi {
  constructor() {
    super('authors/', 'authors');
  }
}

let authorApi = new AuthorApi();

export default authorApi;
