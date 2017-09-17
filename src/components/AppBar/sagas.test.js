import { put } from 'redux-saga/effects';

import { changeAppBarTitle } from './sagas';
import { setTitle } from './actions';
import { root } from '../../services/routes';

describe('changeAppBarTitle()', () => {
  it('should put a `setTitle` action', () => {
    const action = { payload: { pathname: root() } };
    const gen = changeAppBarTitle(action);

    expect(gen.next().value).toEqual(put(setTitle('lovvedit')));
  });
});
