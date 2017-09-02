import { combineReducers } from 'redux';

import { SET_CATEGORY } from './types';

export function categoryReducer(state = null, { type, category }) {
  if (type === SET_CATEGORY) {
    return category;
  }

  return state;
}

export default combineReducers({
  category: categoryReducer,
});
