import { branch, renderComponent, pure, nest } from 'recompose';
import { prop, compose, not, map } from 'ramda';
import styled from 'styled-components';

import LoggedIn from './components/LoggedIn';
import NotLoggedIn from './components/NotLoggedIn';

// Style both components.
const StyledWrapper = styled.div`margin-right: 1rem;`;
const wrapComponents = map(component => nest(StyledWrapper, component));
const [WrappedLoggedIn, WrappedNotLoggedIn] = wrapComponents([LoggedIn, NotLoggedIn]);

// If the component has a falsy `me` prop, render the generic component.
const isNotAuthenticated = compose(not, prop('me'));
const branchOnAuthentication = branch(isNotAuthenticated, renderComponent(WrappedNotLoggedIn));

const enhance = compose(pure, branchOnAuthentication);

export default enhance(WrappedLoggedIn);
