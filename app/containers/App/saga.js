/**
 * Gets the repositories of the user from Github
 */

import { put, takeLatest, select, call } from 'redux-saga/effects';
import {
  SET_SESSION,
  RESTORE_SESSION,
  SESSION_DESTROY,
  LOAD_FORUMS,
} from 'containers/App/constants';
import request from 'utils/request';
import { sessionLoaded, forumsLoaded, forumLoadingError, loading, loaded } from 'containers/App/actions';
import { setCurrentUser, setCurrentUserToken, getCurrentUser } from 'utils/persistUser';

import { makeSelectCurrentUser } from 'containers/App/selectors';

export function* setSession() {
  const user = yield (select(makeSelectCurrentUser()));
  try {
    yield setCurrentUser(user);
    yield setCurrentUserToken(user.token);
  } catch (e) {
    yield setCurrentUser(false);
    yield setCurrentUserToken(false);
  }
}

export function* restoreSession() {
  try {
    const user = yield getCurrentUser();
    yield put(sessionLoaded(user));
  } catch (e) {
    yield put(sessionLoaded(false));
  }
}

export function* destroySession() {
  try {
    setCurrentUser(null);
    setCurrentUserToken(null);
    yield put(sessionLoaded(false));
  } catch (e) {
    yield put(sessionLoaded(false));
  }
}

/**
 * forum fetcher
 */
export function* getForums() {
  const requestURL = 'http://localhost:3000/api/forums/all';
  yield put(loading());
  try {
    const forums = yield call(request, requestURL);
    yield put(forumsLoaded(forums));
  } catch (err) {
    yield put(forumLoadingError(err));
  } finally {
    yield put(loaded());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* appLoad() {
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(SET_SESSION, setSession);
  yield takeLatest(RESTORE_SESSION, restoreSession);
  yield takeLatest(SESSION_DESTROY, destroySession);
  yield takeLatest(LOAD_FORUMS, getForums);
}
