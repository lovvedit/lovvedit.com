import { ApolloClient, createNetworkInterface } from 'react-apollo';

const { REACT_APP_API_ROOT: API_ROOT } = process.env;

const networkInterface = createNetworkInterface({
  uri: API_ROOT,
});

export default new ApolloClient({
  networkInterface,
});
