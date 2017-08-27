import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import { ConnectedRouter } from 'react-router-redux';

import App from './components/App';

export default function Root({ store, client, history }) {
  return (
    <ApolloProvider store={store} client={client}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ApolloProvider>
  );
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  client: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
