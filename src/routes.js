/**
 * Created by jacob on 26-06-17.
 */
import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import AuthorsPage from './components/author/AuthorsPage';
import ManageAuthorPage from './components/author/ManageAuthorPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="courses/:id" component={ManageCoursePage} />
    <Route path="courses/add/" component={ManageCoursePage} />
    <Route path="authors" component={AuthorsPage} />
    <Route path="authors(/:id)" component={ManageAuthorPage} />
    <Route path="authors/add/" component={ManageAuthorPage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
