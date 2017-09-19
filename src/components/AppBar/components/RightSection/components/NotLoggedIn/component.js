import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'material-ui';

import { routes } from '../../../../../../utils';

const NotLoggedIn = () => (
  <Link to={routes.signIn()}>
    <Button>Log in</Button>
  </Link>
);

export default NotLoggedIn;
