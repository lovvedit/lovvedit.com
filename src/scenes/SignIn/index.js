import { graphql } from 'react-apollo';
import { reduxForm } from 'redux-form';
import gql from 'graphql-tag';
import { compose } from 'ramda';

import SignIn from './component';

const LogInMutation = gql`
  mutation LogIn($username: String!, $password: String!) {
    logIn(username: $username, password: $password)
  }
`;

const withLogin = graphql(LogInMutation, {
  props: ({ mutate }) => ({
    logIn: async (username, password) => {
      const response = await mutate({ variables: { username, password } });
      console.log(response);
    },
  }),
});

const withForm = reduxForm({ form: 'login' });

export default compose(withLogin, withForm)(SignIn);
