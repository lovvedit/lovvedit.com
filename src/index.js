import React from 'react';
import { render } from 'react-dom';

import Root from './components/Root';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root');

render(<Root />, rootEl);

registerServiceWorker();

if (module.hot) {
  module.hot.accept('./components/Root', () => render(<Root />, rootEl));
}
