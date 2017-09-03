import { LOCATION_CHANGE } from 'react-router-redux';
import { takeLatest, put, all, fork } from 'redux-saga/effects';
import { startsWith, __ as _ } from 'ramda';

import * as routes from '../../services/routes';
import { setCategory, setSort } from './actions';

const homeCategory = routes.home(_, '');

export function* changeCategory({ payload: { pathname } }) {
  if (startsWith(homeCategory('movies'), pathname)) {
    yield all([put(setSort()), put(setCategory('MOVIE'))]);
  } else if (startsWith(homeCategory('shows'), pathname)) {
    yield put(setCategory('SHOW'));
  } else if (startsWith(homeCategory('books'), pathname)) {
    yield put(setCategory('BOOK'));
  }
}

export function* watchLocation() {
  yield takeLatest(LOCATION_CHANGE, changeCategory);
}

export default function* rootSaga() {
  yield all([fork(watchLocation)]);
}
