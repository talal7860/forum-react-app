/*
 *
 * SignUpForm reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SIGNUP,
  SIGNUP_UNMOUNT,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  success: false,
  params: {
    email: '',
    username: '',
    password: '',
    password_confirmation: '',
    first_name: '',
    last_name: '',
    phone_number: '',
  },
});

function signUpFormReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUP:
      return state
        .set('loading', true)
        .set('error', false)
        .set('success', false)
        .set('params', action.params);
    case SIGNUP_SUCCESS:
      return state
        .set('success', true)
        .set('loading', false);
    case SIGNUP_ERROR:
      return state
        .set('success', false)
        .set('error', action.error)
        .set('loading', false);
    case SIGNUP_UNMOUNT:
      return initialState;
    default:
      return state;
  }
}

export default signUpFormReducer;
