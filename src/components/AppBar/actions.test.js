import { menuClick, setTitle } from './actions';
import * as types from './types';

describe('menuClick()', () => {
  it('should return the expected action', () => {
    const action = { type: types.MENU_CLICK };
    expect(menuClick()).toEqual(action);
  });
});

describe('setTitle()', () => {
  it('should return the expected action', () => {
    const title = 'test_title';
    const action = { type: types.SET_TITLE, title };
    expect(setTitle(title)).toEqual(action);
  });
});
