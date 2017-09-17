import { getState } from './selectors';
import moduleNamespace from './types';

describe('getState()', () => {
  it('should return the state of the drawer', () => {
    const drawerState = true;
    const state = { [moduleNamespace]: { open: drawerState } };
    expect(getState(state)).toBe(drawerState);
  });
});
