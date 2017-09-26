import { takeLatest, fork, call, all } from 'redux-saga/effects';

import rootSaga, {
  setAuthToken,
  watchLogin,
  removeAuthToken,
  watchLogout,
  watchAllLoginSources,
  watchAllLogoutSources,
} from './sagas';
import { login, logout } from './actions';
import { LOGIN, LOGOUT } from './types';
import * as auth from './auth';

describe('setAuthToken()', () => {
  it('should call `auth.setAuthToken` with the token from the action payload', () => {
    const token = 'test_token';
    const gen = setAuthToken(login(token));

    expect(gen.next().value).toEqual(call(auth.setAuthToken, token));
  });
});

describe('watchLogin()', () => {
  it('should yield a `takeLatest` effect for the right action', () => {
    const gen = watchLogin();
    const saga = setAuthToken;
    expect(gen.next().value).toEqual(takeLatest(LOGIN, saga));
  });
});

describe('removeAuthToken()', () => {
  it('should call `auth.removeAuthToken`', () => {
    const gen = removeAuthToken(logout());

    expect(gen.next().value).toEqual(call(auth.removeAuthToken));
  });
});

describe('watchLogout()', () => {
  it('should yield a `takeLatest` effect for the right action', () => {
    const gen = watchLogout();
    const saga = removeAuthToken;
    expect(gen.next().value).toEqual(takeLatest(LOGOUT, saga));
  });
});

describe('rootSaga()', () => {
  it('should return a `fork` effect with other sagas', () => {
    const gen = rootSaga();
    expect(gen.next().value).toEqual(
      all([
        fork(watchAllLoginSources),
        fork(watchLogin),
        fork(watchAllLogoutSources),
        fork(watchLogout),
      ]),
    );
  });
});
