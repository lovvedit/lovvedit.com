import React from 'react';
import { render } from 'react-dom';

import Root from './components/Root';
import configureStore from './store';
import rootSaga from './rootSaga';
import client from './config/apolloClient';
import history from './config/history';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

const store = configureStore();
store.runSaga(rootSaga);

render(<Root store={store} client={client} history={history} />, rootEl);

registerServiceWorker();

if (module.hot) {
  module.hot.accept('./components/Root', () =>
    render(<Root store={store} client={client} history={history} />, rootEl),
  );
}
