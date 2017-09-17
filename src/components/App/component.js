import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider } from 'material-ui/styles';
import { ThemeProvider } from 'styled-components';

import Main from '../Main';
import Drawer from '../Drawer';
import AppBar from '../AppBar';
import Footer from '../Footer';

const App = ({ scTheme, muiTheme }) => (
  <ThemeProvider theme={scTheme}>
    <MuiThemeProvider theme={muiTheme}>
      <div>
        <AppBar />
        <Drawer />
        <Main />
        <Footer />
      </div>
    </MuiThemeProvider>
  </ThemeProvider>
);

/* eslint-disable react/forbid-prop-types */
App.propTypes = {
  scTheme: PropTypes.object.isRequired,
  muiTheme: PropTypes.object.isRequired,
};
/* eslint-enable react/forbid-prop-types */

export default App;
