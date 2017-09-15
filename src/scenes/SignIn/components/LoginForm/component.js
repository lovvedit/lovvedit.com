import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const LoginForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <Field name="username" type="text" component="input" />
    <Field name="password" type="text" component="input" />
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
