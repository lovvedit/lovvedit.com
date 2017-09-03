import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import * as routes from '../../services/routes';
import Loadable from '../../config/loadable';

const Home = Loadable({ loader: () => import('../../scenes/Home') });
const SignUp = Loadable({ loader: () => import('../../scenes/SignUp') });
const SignIn = Loadable({ loader: () => import('../../scenes/SignIn') });

const StyledMain = styled.main`
  margin: auto;
  padding: 4.5rem 0 6rem;
  width: 90%;

  ${props => props.theme.media.md`
    width: 80%;
  `};
`;

const Main = () => (
  <StyledMain>
    <Switch>
      <Route path="/login" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path={routes.postDetail(':postId')} component={SignUp} />
      <Route path={routes.postCommentDetail(':postId', ':commentId')} component={SignUp} />
      <Route path={routes.home(':category', ':sort')} component={Home} />
    </Switch>
  </StyledMain>
);

export default Main;
