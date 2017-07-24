import commonRestApi from './commonApi';

class CourseApi extends commonRestApi {
  constructor() {
    super('courses/', 'courses');
  }

}

let courseApi = new CourseApi();

export default courseApi;
