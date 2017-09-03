import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';

import CategoriesSection from './components/CategoriesSection';

const CustomDrawer = ({ open, close }) => (
  <Drawer open={open} onClick={close} onRequestClose={close}>
    <CategoriesSection />
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
