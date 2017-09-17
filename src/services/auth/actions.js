import { createAction } from 'redux-actions';
import { identity } from 'ramda';

import { LOGIN, LOGOUT } from './types';

export const login = createAction(LOGIN, identity);
export const logout = createAction(LOGOUT);
