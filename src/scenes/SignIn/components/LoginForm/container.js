import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { reduxForm } from 'redux-form';
import { compose } from 'ramda';
import { withHandlers } from 'recompose';

import LoginForm from './component';
import { actions as authActions } from '../../../../services/auth';

const withForm = reduxForm({ form: 'login' });

const onSubmit = ({ logIn, loginSuccess }) => async ({ username, password }) =>
  loginSuccess(await logIn(username, password));

const LogInMutation = gql`
  mutation LogIn($username: String!, $password: String!) {
    logIn(username: $username, password: $password)
  }
`;

const withLogin = graphql(LogInMutation, {
  props: ({ mutate }) => ({
    logIn: (username, password) =>
      mutate({ variables: { username, password } }).then(response => response.data.logIn),
  }),
});

const mapDispatchToProps = dispatch => ({
  loginSuccess: token => dispatch(authActions.login(token)),
});

export default compose(
  withLogin,
  connect(null, mapDispatchToProps),
  withHandlers({ onSubmit }),
  withForm,
)(LoginForm);
