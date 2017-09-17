import { createAction } from 'redux-actions';

import { TOGGLE, OPEN, CLOSE } from './types';

export const toggle = createAction(TOGGLE);
export const open = createAction(OPEN);
export const close = createAction(CLOSE);
