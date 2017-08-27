import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Loadable from '../../config/loadable';

const Home = Loadable({ loader: () => import('../../scenes/Home') });

const Main = () =>
  (<main>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </main>);

export default Main;
