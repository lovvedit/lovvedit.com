import { injectGlobal } from 'styled-components';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  html {
    font-family: 'Roboto', sans-serif;
    height: 100%;
  }

  body {
    min-height: 100%;
    background-color: hsla(0, 0%, 95%, 1);
    margin: 0;

    position: relative;
  }
`;
