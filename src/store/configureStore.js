import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from '../rootReducer';
import history from '../config/history';
import client from '../config/apolloClient';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddleware = createRouterMiddleware(history);

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(client.middleware(), sagaMiddleware, routerMiddleware)),
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
}
