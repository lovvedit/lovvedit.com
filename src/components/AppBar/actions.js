import { createAction } from 'redux-actions';
import { identity } from 'ramda';

import { MENU_CLICK, SET_TITLE } from './types';

export const menuClick = createAction(MENU_CLICK);
export const setTitle = createAction(SET_TITLE, identity);
