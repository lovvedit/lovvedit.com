import { combineReducers } from 'redux';

import { TOGGLE, OPEN, CLOSE } from './types';

export function stateReducer(state = false, { type }) {
  if (type === TOGGLE) {
    return !state;
  } else if (type === OPEN) {
    return true;
  } else if (type === CLOSE) {
    return false;
  }

  return state;
}

export default combineReducers({
  open: stateReducer,
});
