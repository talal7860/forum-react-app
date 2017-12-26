import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOGIN } from 'containers/Login/constants';
import { loginSuccess, loginError } from 'containers/Login/actions';
import { setSession } from 'containers/App/actions';

import { postRequest } from 'utils/request';
import { makeSelectParams } from 'containers/Login/selectors';

export function* postLogin() {
  const { email, password } = yield select(makeSelectParams());
  const requestURL = 'http://localhost:3000/api/sessions';

  try {
    const data = { email, password };
    const user = yield call(postRequest, requestURL, data);
    yield put(loginSuccess(user));
    yield put(setSession(user.data));
  } catch (err) {
    yield put(loginError(err.message));
  }
}

export default function* loginData() {
  yield takeLatest(LOGIN, postLogin);
}
