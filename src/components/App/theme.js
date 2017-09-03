import { createMuiTheme } from 'material-ui';
import { red, orange } from 'material-ui/colors';
import { css } from 'styled-components';
import { reduce, compose } from 'ramda';

/**
 * Screen size breakpoints (for styled-components).
 */
const breakpoints = {
  xs: 360,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

/**
 * A helper to do media queries in styled-components.
 */
const media = compose(
  reduce(
    (acc, label) => ({
      ...acc,
      [label]: (...args) =>
        css`
          @media (min-width: ${breakpoints[label] / 16}em) {
            ${css(...args)};
          }
        `,
    }),
    {},
  ),
  Object.keys,
)(breakpoints);

/**
 * The styled-components theme.
 */
export const scTheme = {
  ...breakpoints,
  media,
  palette: {
    primary: 'hsla(4, 90%, 58%, 1)',
  },
};

/**
 * The Material UI theme.
 */
export const muiTheme = createMuiTheme({
  palette: {
    primary: red,
    secondary: orange,
  },
});
