import { createAction } from 'redux-actions';
import { always } from 'ramda';

import { SET_USER, REMOVE_USER } from './types';

export const setUser = createAction(SET_USER);
export const removeUser = createAction(REMOVE_USER, always(null));
