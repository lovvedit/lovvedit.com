import { createAction, createActions } from 'redux-actions';
import { identity } from 'ramda';

import { LOGIN, LOGOUT } from './types';

const { login } = createActions({
  [LOGIN]: identity,
});

const logout = createAction(LOGOUT);

export { login, logout };
