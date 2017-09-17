import { createAction, createActions } from 'redux-actions';
import { identity } from 'ramda';

import namespace, { MENU_CLICK, SET_TITLE } from './types';

const menuClick = createAction(MENU_CLICK);

const { [namespace]: { setTitle } } = createActions({
  [SET_TITLE]: identity,
});

export { menuClick, setTitle };
