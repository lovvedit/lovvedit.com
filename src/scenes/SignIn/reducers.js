import { combineReducers } from 'redux';

import { reducer as loginFormReducer } from './components/LoginForm';

export default combineReducers({
  loginForm: loginFormReducer,
});
