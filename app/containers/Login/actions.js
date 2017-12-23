/*
 *
 * Login actions
 *
 */

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

export function login(params) {
  return {
    type: LOGIN,
    params,
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
