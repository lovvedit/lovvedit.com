import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import styled from 'styled-components';

const StyledTitle = styled.span`margin-left: 2rem;`;

const CustomAppBar = ({ title, onMenuClick }) =>
  (<AppBar position="static">
    <Toolbar>
      <IconButton onClick={onMenuClick} color="contrast" aria-label="Menu">
        <MenuIcon />
      </IconButton>
      <Typography type="title" color="inherit">
        <StyledTitle>
          {title}
        </StyledTitle>
      </Typography>
    </Toolbar>
  </AppBar>);

CustomAppBar.propTypes = {
  title: PropTypes.string,
  onMenuClick: PropTypes.func.isRequired,
};

CustomAppBar.defaultProps = {
  title: 'lovvedit',
};

export default CustomAppBar;
