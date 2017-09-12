import { ApolloClient } from 'react-apollo';
import { SubscriptionClient } from 'subscriptions-transport-ws';

import { getAuthToken } from '../services/auth';

const { REACT_APP_GRAPHQL_ENDPOINT: GRAPHQL_ENDPOINT } = process.env;

const client = new SubscriptionClient(GRAPHQL_ENDPOINT, {
  reconnect: true,
  connectionParams: () => ({ authToken: getAuthToken() }),
});

export default new ApolloClient({
  networkInterface: client,
});
