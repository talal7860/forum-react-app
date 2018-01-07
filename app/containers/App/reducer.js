/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  LOAD_FORUMS_SUCCESS,
  LOAD_FORUMS,
  LOAD_FORUMS_ERROR,
  SET_SESSION,
  RESTORE_SESSION,
  SESSION_LOADED,
  SESSION_DESTROY,
  LOADING,
  LOADED,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentUser: false,
  token: false,
  forums: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SESSION:
    case SESSION_LOADED:
      return state
        .set('loading', false)
        .set('error', false)
        .set('currentUser', action.currentUser)
        .set('token', action.token);
    case RESTORE_SESSION:
      return state
        .set('loading', true)
        .set('error', false);
    case SESSION_DESTROY:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_FORUMS:
      return state
        .set('error', false)
        .set('forums', false);
    case LOAD_FORUMS_SUCCESS:
      return state
        .set('forums', action.forums);
    case LOAD_FORUMS_ERROR:
      return state
        .set('error', action.error);
    case LOADING:
      return state
        .set('loading', true);
    case LOADED:
      return state
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
