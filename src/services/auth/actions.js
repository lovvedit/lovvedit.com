import { always } from 'ramda';

import * as types from './types';

export const loginSuccess = token => ({
  type: types.LOGIN_SUCCESS,
  token,
});

export const logoutSuccess = always({ type: types.LOGOUT_SUCCESS });
