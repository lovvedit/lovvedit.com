import { LOCATION_CHANGE } from 'react-router-redux';
import { takeLatest, put, all, fork } from 'redux-saga/effects';
import { startsWith, __ as _ } from 'ramda';

import * as routes from '../../services/routes';
import * as actions from './actions';

const homeCategory = routes.home(_, '');

export function* changeAppBarTitle({ payload: { pathname } }) {
  if (pathname === routes.root()) {
    yield put(actions.setTitle('lovvedit'));
  } else if (startsWith(homeCategory('movies'), pathname)) {
    yield put(actions.setTitle('Movies'));
  } else if (startsWith(homeCategory('shows'), pathname)) {
    yield put(actions.setTitle('TV Shows'));
  } else if (startsWith(homeCategory('books'), pathname)) {
    yield put(actions.setTitle('Books'));
  } else if ((routes.signIn(), pathname)) {
    yield put(actions.setTitle('Log in'));
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
