import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Toolbar, Typography, IconButton } from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import styled from 'styled-components';

import RightSection from './components/RightSection';

const StyledTitle = styled.span`
  margin-left: 1rem;
  font-weight: 400;
`;

const StyledTitleTypography = styled(Typography)`flex: 1;`;

const StyledMenuButton = styled(IconButton)`margin-left: 0.75rem;`;

const StyledAppBar = styled(AppBar)`background: hsla(0, 0%, 14%, 1) !important;`;

const CustomAppBar = ({ title, onMenuClick }) => (
  <StyledAppBar>
    <Toolbar disableGutters>
      <StyledMenuButton onClick={onMenuClick} color="contrast" aria-label="Menu">
        <MenuIcon />
      </StyledMenuButton>
      <StyledTitleTypography type="title" color="inherit">
        <StyledTitle>{title}</StyledTitle>
      </StyledTitleTypography>
      <RightSection />
    </Toolbar>
  </StyledAppBar>
);

CustomAppBar.propTypes = {
  title: PropTypes.string.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};

export default CustomAppBar;
