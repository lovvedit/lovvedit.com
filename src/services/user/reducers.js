import { combineReducers } from 'redux';
import { handleAction, combineActions } from 'redux-actions';

import { setUser, removeUser } from './actions';

export const userReducer = handleAction(
  combineActions(setUser, removeUser),
  (state, { payload }) => payload,
  null,
);

export default combineReducers({
  user: userReducer,
});
