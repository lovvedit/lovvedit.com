import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';

import { setTitle } from './actions';

export const titleReducer = handleAction(setTitle, (state, { payload }) => payload, 'lovvedit');

export default combineReducers({
  title: titleReducer,
});
