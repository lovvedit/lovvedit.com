import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';
import { identity } from 'ramda';

import { SET_TITLE } from './types';

export const titleReducer = handleAction(SET_TITLE, identity, 'lovvedit');

export default combineReducers({
  title: titleReducer,
});
