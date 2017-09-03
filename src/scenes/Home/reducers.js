import { combineReducers } from 'redux';

import { SET_CATEGORY, SET_SORT } from './types';

export function categoryReducer(state = null, { type, category }) {
  if (type === SET_CATEGORY) {
    return category;
  }

  return state;
}

const sortReducer = (state = 'hot', { type, sort }) => {
  if (type === SET_SORT) {
    return sort;
  }

  return state;
};

export default combineReducers({
  category: categoryReducer,
  sort: sortReducer,
});
