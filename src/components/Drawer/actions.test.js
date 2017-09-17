import { toggle, open, close } from './actions';
import * as types from './types';

describe('toggle()', () => {
  it('should return the expected action', () => {
    const action = { type: types.TOGGLE };
    expect(toggle()).toEqual(action);
  });
});

describe('open()', () => {
  it('should return the expected action', () => {
    const action = { type: types.OPEN };
    expect(open()).toEqual(action);
  });
});

describe('close()', () => {
  it('should return the expected action', () => {
    const action = { type: types.CLOSE };
    expect(close()).toEqual(action);
  });
});
