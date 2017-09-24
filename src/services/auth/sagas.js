import { takeLatest, all, put, call, apply, fork } from 'redux-saga/effects';

import { LOGIN, LOGOUT } from './types';
import { logout, login } from './actions';
import * as auth from './auth';
import { types as appBarTypes } from '../../components/AppBar';
import { loginFormTypes as signInLoginFormTypes } from '../../scenes/SignIn';

const { reload } = window.location;

export function* setAuthToken({ error, payload: token }) {
  if (error) {
    return;
  }

  yield call(auth.setAuthToken, token);
  yield apply(window.location, reload);
}

export function* putAuthLogin({ payload: token }) {
  yield put(login(token));
}

export function* watchAllLoginSources() {
  yield takeLatest([signInLoginFormTypes.LOG_IN], putAuthLogin);
}

export function* watchLogin() {
  yield takeLatest(LOGIN, setAuthToken);
}

export function* removeAuthToken() {
  yield call(auth.removeAuthToken);
  yield apply(window.location, reload);
}

export function* putAuthLogout() {
  yield put(logout());
}

export function* watchAllLogoutSources() {
  yield takeLatest([appBarTypes.LOG_OUT], putAuthLogout);
}

export function* watchLogout() {
  yield takeLatest(LOGOUT, removeAuthToken);
}

export default function* rootSaga() {
  yield all([
    fork(watchAllLoginSources),
    fork(watchLogin),
    fork(watchAllLogoutSources),
    fork(watchLogout),
  ]);
}
