import { connect } from 'react-redux';

import AppBar from './component';
import * as types from './types';
import * as actions from './actions';
import * as selectors from './selectors';
import reducer from './reducers';
import saga from './sagas';

const mapStateToProps = state => ({
  title: selectors.getTitle(state),
});

const mapDispatchToProps = dispatch => ({
  onMenuClick: () => dispatch(actions.menuClick()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);

export { types, actions, reducer, saga };
