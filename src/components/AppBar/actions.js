import { always } from 'ramda';

import * as types from './types';

export const menuClick = always({ type: types.MENU_CLICK });

export const setTitle = title => ({
  type: types.SET_TITLE,
  title,
});
