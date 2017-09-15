import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from 'material-ui';

import LoginForm from './components/LoginForm';

const SignIn = ({ logIn }) => (
  <Paper>
    <LoginForm />
  </Paper>
);

SignIn.propTypes = {
  logIn: PropTypes.func.isRequired,
};

export default SignIn;
