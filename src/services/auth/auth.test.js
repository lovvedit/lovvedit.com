import { setAuthToken, getAuthToken, removeAuthToken, isAuthenticated } from './auth';

window.localStorage = { setItem: jest.fn(), removeItem: jest.fn(), getItem: jest.fn() };

describe('setAuthToken()', () => {
  it('should call `localStorage.setItem`', () => {
    const token = 'test_token';
    setAuthToken(token);
    expect(window.localStorage.setItem).toHaveBeenCalled();
  });
});

describe('getAuthToken()', () => {
  it('should call `localStorage.getItem`', () => {
    getAuthToken();
    expect(window.localStorage.getItem).toHaveBeenCalled();
  });
});
describe('removeAuthToken()', () => {
  it('should call `localStorage.removeItem`', () => {
    removeAuthToken();
    expect(window.localStorage.removeItem).toHaveBeenCalled();
  });
});
describe('isAuthenticated()', () => {
  it('should call `localStorage.getItem`', () => {
    isAuthenticated();
    expect(window.localStorage.getItem).toHaveBeenCalled();
  });
});
