/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_UNMOUNT,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  user: false,
  params: {
    email: '',
    password: '',
  },
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return state
        .set('loading', true)
        .set('error', false)
        .set('user', false)
        .set('params', action.params);
    case LOGIN_SUCCESS:
      return state
        .set('loading', false)
        .set('user', action.user);
    case LOGIN_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case LOGIN_UNMOUNT:
      return initialState;
    default:
      return state;
  }
}

export default loginReducer;
