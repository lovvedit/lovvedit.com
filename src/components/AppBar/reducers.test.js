import * as types from './types';
import { setTitle } from './actions';
import { titleReducer } from './reducers';

describe('titleReducer()', () => {
  it('should return `title` if the type is correct', () => {
    const title = 'test_title';
    const action = setTitle(title);

    expect(titleReducer(undefined, action)).toBe(title);
  });

  it('should return the default if the type is not correct', () => {
    const title = 'test_title';
    const action = { type: 'other_type', title };
    const defaultState = 'lovvedit';

    expect(titleReducer(undefined, action)).toBe(defaultState);
  });
});
