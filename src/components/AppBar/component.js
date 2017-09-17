import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, IconButton } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import styled from 'styled-components';

const StyledTitle = styled.span`margin-left: 1rem;`;

const StyledMenuButton = styled(IconButton)`margin-left: 0.75rem;`;

const CustomAppBar = ({ title, onMenuClick }) => (
  <AppBar>
    <Toolbar disableGutters>
      <StyledMenuButton onClick={onMenuClick} color="contrast" aria-label="Menu">
        <MenuIcon />
      </StyledMenuButton>
      <Typography type="title" color="inherit">
        <StyledTitle>{title}</StyledTitle>
      </Typography>
    </Toolbar>
  </AppBar>
);

CustomAppBar.propTypes = {
  title: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};

export default CustomAppBar;
