import React from 'react';
import { object, bool, any, func } from 'prop-types';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, IconButton } from 'material-ui';
import MoreVertIcon from 'material-ui-icons/MoreVert';

const LoggedIn = ({ me, handleOpen, handleClose, handleLogout, anchorEl, open, className }) => (
  <div className={className}>
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
  me: object,
  open: bool.isRequired,
  anchorEl: any,
  handleOpen: func.isRequired,
  handleClose: func.isRequired,
  handleLogout: func.isRequired,
  className: object,
};
/* eslint-enable react/forbid-prop-types */

LoggedIn.defaultProps = {
  me: null,
  anchorEl: null,
  className: '',
};

export default LoggedIn;
