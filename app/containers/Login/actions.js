/*
 *
 * Login actions
 *
 */

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_UNMOUNT,
} from './constants';

export function login(params) {
  return {
    type: LOGIN,
    params,
  };
}

export function unmount() {
  return {
    type: LOGIN_UNMOUNT,
  };
}

export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error,
  };
}
