import { takeLatest, all, call, apply, fork } from 'redux-saga/effects';

import { LOGIN, LOGOUT } from './types';
import * as auth from './auth';

const { reload } = window.location;

export function* setAuthToken({ payload: token }) {
  yield call(auth.setAuthToken, token);
  yield apply(window.location, reload);
}

export function* watchLogin() {
  yield takeLatest(LOGIN, setAuthToken);
}

export function* removeAuthToken() {
  yield call(auth.removeAuthToken);
  yield apply(window.location, reload);
}

export function* watchLogout() {
  yield takeLatest(LOGOUT, removeAuthToken);
}

export default function* rootSaga() {
  yield all([fork(watchLogin), fork(watchLogout)]);
}
