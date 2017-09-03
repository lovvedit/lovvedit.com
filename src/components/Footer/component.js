import React from 'react';
import { Paper } from 'material-ui';
import styled from 'styled-components';

const StyledPaper = styled(Paper)`
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;

  padding: 2rem;
`;

const Footer = () => <StyledPaper>hola</StyledPaper>;

export default Footer;
