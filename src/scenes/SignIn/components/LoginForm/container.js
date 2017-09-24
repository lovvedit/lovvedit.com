import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { reduxForm } from 'redux-form';
import { withHandlers } from 'recompose';
import { compose, path } from 'ramda';

import LoginForm from './component';
import { logIn as logInAction } from './actions';
import { getError } from './selectors';

const withForm = reduxForm({ form: 'login' });

const onSubmit = ({ logIn, dispatchLogin }) => ({ username, password }) =>
  logIn(username, password).then(dispatchLogin, dispatchLogin);

const LogInMutation = gql`
  mutation LogIn($username: String!, $password: String!) {
    logIn(username: $username, password: $password)
  }
`;

const withLogin = graphql(LogInMutation, {
  props: ({ mutate }) => ({
    logIn: (username, password) =>
      mutate({ variables: { username, password } }).then(path(['data', 'logIn'])),
  }),
});

const mapStateToProps = state => ({
  loginError: getError(state),
});

const mapDispatchToProps = dispatch => ({
  dispatchLogin: token => dispatch(logInAction(token)),
});

export default compose(
  withLogin,
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({ onSubmit }),
  withForm,
)(LoginForm);
