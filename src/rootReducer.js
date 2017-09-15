import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { reducer as drawerReducer } from './components/Drawer';
import { reducer as appBarReducer } from './components/AppBar';

import client from './config/apolloClient';

export default combineReducers({
  drawer: drawerReducer,
  appBar: appBarReducer,
  router: routerReducer,
  apollo: client.reducer(),
  form: formReducer,
});
