/**
 * Created by jacob on 27-06-17.
 */
import {createStore, applyMiddleware, combineReducers} from 'redux';
// import rootReducer from '../reducers';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
// import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  return createStore(state => state
    // rootReducer,
    //initialState
    // applyMiddleware(thunk, reduxImmutableStateInvariant())
  );
}
