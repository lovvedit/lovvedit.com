import React from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

import theme from './theme';
import Main from './components/Main';

const StyledWrapper = styled.div`color: ${props => props.theme.primaryTextColor};`;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        <Main />
      </StyledWrapper>
    </ThemeProvider>
  );
}

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    margin: 0;
  }
`;
