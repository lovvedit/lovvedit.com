import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';

import { logIn } from './actions';

export const loginReducer = handleAction(
  logIn,
  (state, { error, payload }) => ({
    error,
    response: payload,
  }),
  { error: false, response: null },
);

export default combineReducers({
  login: loginReducer,
});
