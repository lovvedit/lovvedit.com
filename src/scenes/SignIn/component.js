import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from 'material-ui';
import { Field } from 'redux-form';

const SignIn = ({ handleSubmit }) => (
  <Paper>
    <form onSubmit={handleSubmit}>
      <Field name="username" type="text" />
      <Field name="password" type="text" />
    </form>
  </Paper>
);

SignIn.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default SignIn;
