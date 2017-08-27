import { connect } from 'react-redux';

import Drawer from './component';
import * as types from './types';
import * as selectors from './selectors';
import * as actions from './actions';
import reducer from './reducers';
import saga from './sagas';

const mapStateToProps = state => ({
  open: selectors.getState(state),
});

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(actions.close()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);

export { types, actions, selectors, reducer, saga };
