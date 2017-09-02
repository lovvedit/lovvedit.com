import { LOCATION_CHANGE } from 'react-router-redux';
import { takeLatest, put, all, fork } from 'redux-saga/effects';

import * as pathnames from '../../pathnames';
import * as actions from './actions';

export function* changeCategory({ payload: { pathname } }) {
  if (pathname === pathnames.MOVIES) {
    yield put(actions.setCategory('MOVIE'));
  } else if (pathname === pathnames.SHOWS) {
    yield put(actions.setCategory('SHOW'));
  } else if (pathname === pathnames.BOOKS) {
    yield put(actions.setCategory('BOOK'));
  }
}

export function* watchLocation() {
  yield takeLatest(LOCATION_CHANGE, changeCategory);
}

export default function* rootSaga() {
  yield all([fork(watchLocation)]);
}
