import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from 'react-apollo';
import { ConnectedRouter } from 'react-router-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import { ThemeProvider } from 'styled-components';

import App from '../App';

import './globalStyles';

const Root = ({ store, client, history, scTheme, muiTheme }) => (
  <ApolloProvider store={store} client={client}>
    <ConnectedRouter history={history}>
      <ThemeProvider theme={scTheme}>
        <MuiThemeProvider theme={muiTheme}>
          <App />
        </MuiThemeProvider>
      </ThemeProvider>
    </ConnectedRouter>
  </ApolloProvider>
);

/* eslint-disable react/forbid-prop-types */
Root.propTypes = {
  store: PropTypes.object.isRequired,
  client: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  scTheme: PropTypes.object.isRequired,
  muiTheme: PropTypes.object.isRequired,
};
/* eslint-enable react/forbid-prop-types */

export default Root;
