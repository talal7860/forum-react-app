/*
 *
 * SignUpForm actions
 *
 */

import {
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  SIGNUP_UNMOUNT,
} from './constants';

export function signUp(params) {
  return {
    type: SIGNUP,
    params,
  };
}

export function unmount() {
  return {
    type: SIGNUP_UNMOUNT,
  };
}

export function signUpSuccess(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  };
}

export function signUpError(error) {
  return {
    type: SIGNUP_ERROR,
    error,
  };
}
