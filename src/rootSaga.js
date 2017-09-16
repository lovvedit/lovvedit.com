import { all, fork } from 'redux-saga/effects';

import { saga as drawerSaga } from './components/Drawer';
import { saga as appBarSaga } from './components/AppBar';
import { saga as authSaga } from './services/auth';

export default function* rootSaga() {
  yield all([fork(drawerSaga), fork(appBarSaga), fork(authSaga)]);
}
