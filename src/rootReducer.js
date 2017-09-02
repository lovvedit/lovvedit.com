import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { reducer as drawerReducer } from './components/Drawer';
import { reducer as appBarReducer } from './components/AppBar';
import { reducer as homeReducer } from './scenes/Home';

import client from './config/apolloClient';

export default combineReducers({
  home: homeReducer,
  drawer: drawerReducer,
  appBar: appBarReducer,
  router: routerReducer,
  apollo: client.reducer(),
});
