import * as types from './types';

export const setCategory = category => ({
  type: types.SET_CATEGORY,
  category,
});

export const setSort = sort => ({
  type: types.SET_SORT,
  sort,
});
