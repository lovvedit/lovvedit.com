import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';

const LoginForm = ({ handleSubmit, loginError }) => (
  <form onSubmit={handleSubmit}>
    <div>{loginError}</div>
    <Field name="username" type="text" component="input" />
    <Field name="password" type="text" component="input" />
    <button>submit</button>
  </form>
);

LoginForm.propTypes = {
  loginError: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
};

LoginForm.defaultProps = {
  loginError: null,
};

export default LoginForm;
