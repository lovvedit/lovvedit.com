import { connect } from 'react-redux';
import { withStateHandlers } from 'recompose';
import { compose } from 'ramda';

import LoggedIn from './component';
import { logOut } from '../../../../actions';

const mapDispatchToProps = dispatch => ({
  handleLogout: () => dispatch(logOut()),
});

const enhance = compose(
  connect(null, mapDispatchToProps),
  withStateHandlers(
    { open: false, anchorEl: null },
    {
      handleOpen: () => ({ target }) => ({ open: true, anchorEl: target }),
      handleClose: () => () => ({ open: false }),
    },
  ),
);

export default enhance(LoggedIn);
