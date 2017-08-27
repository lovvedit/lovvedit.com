import { combineReducers } from 'redux';

import { SET_TITLE } from './types';

export function titleReducer(state = 'lovvedit', { type, title }) {
  if (type === SET_TITLE) {
    return title;
  }

  return state;
}

export default combineReducers({
  title: titleReducer,
});
