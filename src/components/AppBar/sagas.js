import { LOCATION_CHANGE } from 'react-router-redux';
import { takeLatest, put, all, fork } from 'redux-saga/effects';

import * as pathnames from '../../pathnames';
import * as actions from './actions';

export function* changeAppBarTitle({ payload: { pathname } }) {
  if (pathname === pathnames.HOME) {
    yield put(actions.setTitle('lovvedit'));
  } else if (pathname === pathnames.MOVIES) {
    yield put(actions.setTitle('Movies'));
  } else if (pathname === pathnames.SHOWS) {
    yield put(actions.setTitle('TV Shows'));
  } else if (pathname === pathnames.BOOKS) {
    yield put(actions.setTitle('Books'));
  } else {
    yield put(actions.setTitle('lovvedit'));
  }
}

export function* watchLocation() {
  yield takeLatest(LOCATION_CHANGE, changeAppBarTitle);
}

export default function* rootSaga() {
  yield all([fork(watchLocation)]);
}
