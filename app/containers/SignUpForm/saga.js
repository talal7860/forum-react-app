import { call, put, select, takeLatest } from 'redux-saga/effects';

import { postRequest } from 'utils/request';
import { setSession } from 'containers/App/actions';
import { makeSelectParams } from './selectors';
import { SIGNUP } from './constants';
import { signUpSuccess, signUpError } from './actions';

export function* postSignUp() {
  const {
    email,
    username,
    password,
    password_confirmation,
    first_name,
    last_name,
  } = yield select(makeSelectParams());
  const requestURL = 'http://localhost:3000/api/users';

  try {
    const data = {
      email,
      username,
      password,
      password_confirmation,
      first_name,
      last_name,
    };
    const user = yield call(postRequest, requestURL, data);
    yield put(signUpSuccess(user));
    yield put(setSession(user.data));
  } catch (err) {
    yield put(signUpError(err.message));
  }
}

export default function* signUpData() {
  yield takeLatest(SIGNUP, postSignUp);
}
