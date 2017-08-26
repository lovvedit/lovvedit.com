import { createStore, applyMiddleware, compose } from 'redux';
import loggerMiddleware from 'redux-logger';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import createSagaMiddleware, { END } from 'redux-saga';

import DevTools from '../components/Root/components/DevTools';
import rootReducer from '../rootReducer';
import history from '../config/history';
import client from '../config/apolloClient';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const routerMiddleware = createRouterMiddleware(history);

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(client.middleware(), sagaMiddleware, routerMiddleware, loggerMiddleware),
      DevTools.instrument(),
    ),
  );

  if (module.hot) {
    module.hot.accept('../rootReducer', () => store.replaceReducer(rootReducer));
  }

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
}
