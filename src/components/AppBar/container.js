import { connect } from 'react-redux';
import { compose } from 'ramda';

import AppBar from './component';
import * as actions from './actions';
import * as selectors from './selectors';

const mapStateToProps = state => ({
  title: selectors.getTitle(state),
});

const mapDispatchToProps = dispatch => ({
  onMenuClick: () => dispatch(actions.menuClick()),
});

const enhance = compose(connect(mapStateToProps, mapDispatchToProps));

export default enhance(AppBar);
