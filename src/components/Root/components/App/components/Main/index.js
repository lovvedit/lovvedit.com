import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Loadable from '../../../../../../config/loadable';

const Home = Loadable({ loader: () => import('../../../../../../scenes/Home') });

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </main>
  );
}
