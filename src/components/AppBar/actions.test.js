import { menuClick, setTitle } from './actions';
import { MENU_CLICK, SET_TITLE } from './types';

describe('menuClick()', () => {
  it('should return the expected action', () => {
    const action = { type: MENU_CLICK };
    expect(menuClick()).toEqual(action);
  });
});

describe('setTitle()', () => {
  it('should return the expected action', () => {
    const title = 'test_title';
    const action = { type: SET_TITLE, payload: title };
    expect(setTitle(title)).toEqual(action);
  });
});
