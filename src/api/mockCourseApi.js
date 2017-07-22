import commonRestApi from './commonApi';

class CourseApi extends commonRestApi {
  constructor(relativeLink) {
    super(relativeLink);
  }

}

let courseApi = new CourseApi('courses/')

export default courseApi;
