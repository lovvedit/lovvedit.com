import { ApolloClient } from 'react-apollo';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { always } from 'ramda';

import { utils } from '../services/auth';

const { REACT_APP_GRAPHQL_ENDPOINT: GRAPHQL_ENDPOINT } = process.env;

const client = new SubscriptionClient(GRAPHQL_ENDPOINT, {
  reconnect: true,
  /**
   * We need to reload the page when authToken changes,
   * because there's no other way to restart the WS connection.
   */
  connectionParams: always({ authToken: utils.getAuthToken() }),
});

export default new ApolloClient({
  networkInterface: client,
});
