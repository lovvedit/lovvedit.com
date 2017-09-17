import { not } from 'ramda';

import { toggle, open, close } from './actions';
import { stateReducer } from './reducers';

describe('`stateReducer()`', () => {
  it('should negate the current state if action is the toggle action', () => {
    const action = toggle();
    const state = true;
    expect(stateReducer(state, action)).toBe(not(state));
  });

  it('should return `true` if action is the open action', () => {
    const action = open();
    expect(stateReducer(undefined, action)).toBe(true);
  });

  it('should return `false` if action is the close action', () => {
    const action = close();
    expect(stateReducer(undefined, action)).toBe(false);
  });
});
