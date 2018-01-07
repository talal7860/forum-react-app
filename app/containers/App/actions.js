/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { getOr } from 'lodash/fp';
import {
  LOAD_FORUMS,
  LOAD_FORUMS_SUCCESS,
  LOAD_FORUMS_ERROR,
  SET_SESSION,
  SESSION_LOADED,
  RESTORE_SESSION,
  SESSION_DESTROY,
  LOADING,
  LOADED,
} from './constants';


/**
 * Load the forums, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_FORUMS
 */
export function loadForums() {
  return {
    type: LOAD_FORUMS,
  };
}

/**
 * Dispatched when the repositories are loaded by the request saga
 *
 * @param  {array} forums The forum data
 *
 * @return {object}      An action object with a type of LOAD_FORUMS_SUCCESS passing the repos
 */
export function forumsLoaded(forums) {
  return {
    type: LOAD_FORUMS_SUCCESS,
    forums,
  };
}

/**
 * Dispatched when loading the forums fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_FORUMS_ERROR passing the error
 */
export function forumLoadingError(error) {
  return {
    type: LOAD_FORUMS_ERROR,
    error,
  };
}
/**
 * Dispatched on when a session has to be set
 */
export function setSession(currentUser) {
  return {
    type: SET_SESSION,
    currentUser,
    token: getOr(false, 'token', currentUser),
  };
}
/**
 * Dispatchd on app load to restore persisted session
 */
export function restoreSession() {
  return {
    type: RESTORE_SESSION,
  };
}

export function sessionLoaded(currentUser) {
  return {
    type: SESSION_LOADED,
    currentUser,
    token: getOr(false, 'token', currentUser),
  };
}

export function loading() {
  return {
    type: LOADING,
  };
}

export function loaded() {
  return {
    type: LOADED,
  };
}

export function logout() {
  return {
    type: SESSION_DESTROY,
  };
}
