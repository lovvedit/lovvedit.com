import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';

import { getAuthToken } from '../services/auth';

const {
  REACT_APP_GRAPHQL_ENDPOINT: GRAPHQL_ENDPOINT,
  REACT_APP_SUBSCRIPTIONS_ENDPOINT: SUBSCRIPTIONS_ENDPOINT,
} = process.env;

const networkInterface = createNetworkInterface({
  uri: GRAPHQL_ENDPOINT,
});

networkInterface.use([
  {
    applyMiddleware(req, next) {
      setTimeout(next, 1000);
    },
  },
]);

const wsClient = new SubscriptionClient(SUBSCRIPTIONS_ENDPOINT, {
  reconnect: true,
  connectionParams: () => ({ authToken: getAuthToken() }),
});

const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(networkInterface, wsClient);

export default new ApolloClient({
  networkInterface: networkInterfaceWithSubscriptions,
});
