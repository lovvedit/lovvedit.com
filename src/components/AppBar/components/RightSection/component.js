import React from 'react';
import PropTypes from 'prop-types';
import { branch, renderComponent, renderNothing } from 'recompose';
import styled from 'styled-components';
import { prop } from 'ramda';

import LoggedIn from './components/LoggedIn';
import NotLoggedIn from './components/NotLoggedIn';

const renderBranch = branch(prop('me'), renderComponent(LoggedIn), renderComponent(NotLoggedIn));

const StyledWrapper = styled.div``;

const RightSection = props => <StyledWrapper>{renderBranch(props)}</StyledWrapper>;

// export default branch(prop('loading'), renderNothing, renderComponent(RightSection));
export default () => <div>hola</div>;
