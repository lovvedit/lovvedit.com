import { login, logout } from './actions';
import { LOGIN, LOGOUT } from './types';

describe('login()', () => {
  it('should return the expected action', () => {
    const token = 'test_token';
    const action = { type: LOGIN, payload: token };
    expect(login(token)).toEqual(action);
  });
});

describe('logout()', () => {
  it('should return the expected action', () => {
    const action = { type: LOGOUT };
    expect(logout()).toEqual(action);
  });
});
