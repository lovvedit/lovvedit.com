import React from 'react';
import { MuiThemeProvider } from 'material-ui/styles';
import { ThemeProvider } from 'styled-components';

import { scTheme, muiTheme } from './theme';
import Main from '../Main';
import Drawer from '../Drawer';
import AppBar from '../AppBar';

const App = () =>
  (<ThemeProvider theme={scTheme}>
    <MuiThemeProvider theme={muiTheme}>
      <div>
        <AppBar />
        <Drawer />
        <Main />
      </div>
    </MuiThemeProvider>
  </ThemeProvider>);

export default App;
