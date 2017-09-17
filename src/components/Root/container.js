import { defaultProps } from 'recompose';

import Root from './component';
import configureStore from './../../store';
import rootSaga from './../../rootSaga';
import client from './../../config/apolloClient';
import history from './../../config/history';

const store = configureStore();
store.runSaga(rootSaga);

export default defaultProps({ store, client, history })(Root);
