import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  color: ${props => props.theme.palette.primary};
  text-decoration: none;
`;
