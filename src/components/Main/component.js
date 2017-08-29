import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Loadable from '../../config/loadable';

const Home = Loadable({ loader: () => import('../../scenes/Home') });

const StyledMain = styled.main`
  margin: auto;
  width: 90%;

  @media screen and (min-width: 1024px) {
    width: 70%;
  }
`;

const Main = () => (
  <StyledMain>
    <Switch>
      <Route path="/:category" component={Home} />
    </Switch>
  </StyledMain>
);

export default Main;
