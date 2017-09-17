import { takeEvery, put, all, fork } from 'redux-saga/effects';

import { open } from './actions';
import { types as appBarTypes } from '../AppBar';

export function* openDrawer() {
  yield put(open());
}

export function* watchAppBarMenuClick() {
  yield takeEvery(appBarTypes.MENU_CLICK, openDrawer);
}

export default function* rootSaga() {
  yield all([fork(watchAppBarMenuClick)]);
}
