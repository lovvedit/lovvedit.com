import withWidth from 'material-ui/utils/withWidth';

import Home from './component';
import * as types from './types';
import * as selectors from './selectors';
import * as actions from './actions';
import reducer from './reducers';
import saga from './sagas';

export default withWidth()(Home);

export { types, actions, selectors, reducer, saga };
