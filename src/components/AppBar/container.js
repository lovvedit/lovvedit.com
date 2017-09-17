import { connect } from 'react-redux';

import AppBar from './component';
import * as actions from './actions';
import * as selectors from './selectors';

const mapStateToProps = state => ({
  title: selectors.getTitle(state),
});

const mapDispatchToProps = dispatch => ({
  onMenuClick: () => dispatch(actions.menuClick()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
