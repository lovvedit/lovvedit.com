import { withProps } from 'recompose';

import App from './component';
import { scTheme, muiTheme } from './themes';

export default withProps({ scTheme, muiTheme })(App);
