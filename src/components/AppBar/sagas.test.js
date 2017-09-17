import { LOCATION_CHANGE } from 'react-router-redux';
import { put, takeLatest, fork, all } from 'redux-saga/effects';

import rootSaga, { changeAppBarTitle, watchLocation } from './sagas';
import { setTitle } from './actions';
import { routes } from '../../utils';

describe('changeAppBarTitle()', () => {
  it('should put a `setTitle` action', () => {
    const action = { payload: { pathname: routes.root() } };
    const gen = changeAppBarTitle(action);

    expect(gen.next().value).toEqual(put(setTitle('lovvedit')));
  });
});

describe('watchLocation()', () => {
  it('should yield a `takeLatest` effect for the right action', () => {
    const gen = watchLocation();
    const saga = changeAppBarTitle;
    expect(gen.next().value).toEqual(takeLatest(LOCATION_CHANGE, saga));
  });
});

describe('rootSaga()', () => {
  it('should return a `fork` effect with other sagas', () => {
    const gen = rootSaga();
    expect(gen.next().value).toEqual(all([fork(watchLocation)]));
  });
});
