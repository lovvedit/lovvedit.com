import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Item = ({ text, to, icon }) =>
  (<StyledLink to={to}>
    <ListItem button>
      {icon &&
        <ListItemIcon>
          {icon}
        </ListItemIcon>}
      <ListItemText primary={text} />
    </ListItem>
  </StyledLink>);

Item.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  icon: PropTypes.element,
};

Item.defaultProps = {
  to: {},
  icon: null,
};

export default Item;
