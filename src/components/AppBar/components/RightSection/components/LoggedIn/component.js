import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, IconButton } from 'material-ui';
import MoreVertIcon from 'material-ui-icons/MoreVert';

const LoggedIn = ({ me, handleOpen, handleClose, handleLogout, anchorEl, open }) => (
  <div>
    <IconButton onClick={handleOpen} color="contrast">
      <MoreVertIcon />
    </IconButton>
    <Menu anchorEl={anchorEl} open={open} onRequestClose={handleClose}>
      <Link to="/settings">
        <MenuItem onClick={handleClose}>Settings</MenuItem>
      </Link>
      <MenuItem onClick={handleLogout}>Log out</MenuItem>
    </Menu>
  </div>
);

/* eslint-disable react/forbid-prop-types */
LoggedIn.propTypes = {
  me: PropTypes.object,
  open: PropTypes.bool.isRequired,
  anchorEl: PropTypes.any,
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
};
/* eslint-enable react/forbid-prop-types */

LoggedIn.defaultProps = {
  me: null,
  anchorEl: null,
};

export default LoggedIn;
