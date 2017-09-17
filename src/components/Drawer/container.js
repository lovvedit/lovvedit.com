import { connect } from 'react-redux';

import Drawer from './component';
import * as selectors from './selectors';
import * as actions from './actions';

const mapStateToProps = state => ({
  open: selectors.getState(state),
});

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(actions.close()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Drawer);
