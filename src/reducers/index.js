/**
 * Created by jacob on 27-06-17.
 */
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';


const rootReducer = combineReducers({
  courses,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
