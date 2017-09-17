import { put, takeEvery, all, fork } from 'redux-saga/effects';

import rootSaga, { openDrawer, watchAppBarMenuClick } from './sagas';
import { open } from './actions';
import { types as appBarTypes } from '../AppBar';

describe('openDrawer()', () => {
  it('should put a `setTitle` action', () => {
    const gen = openDrawer();
    expect(gen.next().value).toEqual(put(open()));
  });
});

describe('watchAppBarMenuClick()', () => {
  it('should yield a `takeEvery` effect for the right action', () => {
    const gen = watchAppBarMenuClick();
    const saga = openDrawer;
    expect(gen.next().value).toEqual(takeEvery(appBarTypes.MENU_CLICK, saga));
  });
});

describe('rootSaga()', () => {
  it('should return a `fork` effect with other sagas', () => {
    const gen = rootSaga();
    expect(gen.next().value).toEqual(all([fork(watchAppBarMenuClick)]));
  });
});
