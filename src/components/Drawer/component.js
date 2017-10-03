import React from 'react';
import { bool, func } from 'prop-types';
import { Drawer, Divider } from 'material-ui';

import CategoriesSection from './components/CategoriesSection';

const CustomDrawer = ({ open, close }) => (
  <Drawer open={open} onClick={close} onRequestClose={close}>
    <CategoriesSection />
    <Divider />
  </Drawer>
);

CustomDrawer.propTypes = {
  open: bool,
  close: func.isRequired,
};

CustomDrawer.defaultProps = {
  open: false,
};

export default CustomDrawer;
