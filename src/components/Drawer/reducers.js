import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { T, F, not } from 'ramda';

import { TOGGLE, OPEN, CLOSE } from './types';

export const stateReducer = handleActions(
  {
    [TOGGLE]: not,
    [OPEN]: T,
    [CLOSE]: F,
  },
  false,
);

export default combineReducers({
  open: stateReducer,
});
