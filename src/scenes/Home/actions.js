import * as types from './types';

// eslint-disable-next-line import/prefer-default-export
export const setCategory = category => ({
  type: types.SET_CATEGORY,
  category,
});
