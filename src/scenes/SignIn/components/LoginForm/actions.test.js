import { logIn } from './actions';
import { LOG_IN } from './types';

describe('logIn()', () => {
  it('should return the expected action', () => {
    const token = 'test_token';
    const action = { type: LOG_IN, payload: token };
    expect(logIn(token)).toEqual(action);
  });
});
