import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import HomeIcon from 'material-ui-icons/Home';
import MovieIcon from 'material-ui-icons/Movie';
import TvIcon from 'material-ui-icons/Tv';
import BookIcon from 'material-ui-icons/Book';

import StyledList from './components/StyledList';
import Item from './components/Item';

const CustomDrawer = ({ open, close }) => (
  <Drawer open={open} onClick={close} onRequestClose={close}>
    <StyledList>
      <Item text="All" to={{ pathname: '/' }} icon={<HomeIcon />} />
      <Item text="Movies" to={{ pathname: '/movies' }} icon={<MovieIcon />} />
      <Item text="Shows" to={{ pathname: '/shows' }} icon={<TvIcon />} />
      <Item text="Books" to={{ pathname: '/books' }} icon={<BookIcon />} />
    </StyledList>
    <Divider />
  </Drawer>
);

CustomDrawer.propTypes = {
  open: PropTypes.bool,
  close: PropTypes.func.isRequired,
};

CustomDrawer.defaultProps = {
  open: false,
};

export default CustomDrawer;
