import { combineReducers } from 'redux';
import { ifElse, equals, always } from 'ramda';

import { SET_TITLE } from './types';

export const titleReducer = (state = 'lovvedit', { type, title }) =>
  ifElse(equals(SET_TITLE), always(title), always(state))(type);

export default combineReducers({
  title: titleReducer,
});
