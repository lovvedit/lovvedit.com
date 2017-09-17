import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { always, not } from 'ramda';

import { TOGGLE, OPEN, CLOSE } from './types';

export const stateReducer = handleActions(
  {
    [TOGGLE]: not,
    [OPEN]: always(true),
    [CLOSE]: always(false),
  },
  false,
);

export default combineReducers({
  open: stateReducer,
});
