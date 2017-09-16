import { takeLatest, all, call, apply, fork } from 'redux-saga/effects';

import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './types';
import { setAuthToken, removeAuthToken } from './utils';

const { reload } = window.location;

export function* setAuthTokenSaga({ token }) {
  yield call(setAuthToken, token);
  yield apply(window.location, reload);
}

export function* watchLoginSuccess() {
  yield takeLatest(LOGIN_SUCCESS, setAuthTokenSaga);
}

export function* removeAuthTokenSaga() {
  yield call(removeAuthToken);
  yield apply(window.location, reload);
}

export function* watchLogoutSuccess() {
  yield takeLatest(LOGOUT_SUCCESS, removeAuthTokenSaga);
}

export default function* rootSaga() {
  yield all([fork(watchLoginSuccess), fork(watchLogoutSuccess)]);
}
