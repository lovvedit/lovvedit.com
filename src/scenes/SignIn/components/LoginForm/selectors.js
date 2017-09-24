import { path, ifElse, always, concat, compose, head, prop } from 'ramda';

const addLoginStorePath = concat(['signIn', 'loginForm', 'login']);

const getFirstErrorMessage = compose(
  prop('message'),
  head,
  path(addLoginStorePath(['response', 'graphQLErrors'])),
);

// eslint-disable-next-line import/prefer-default-export
export const getError = ifElse(
  path(addLoginStorePath(['error'])),
  getFirstErrorMessage,
  always(null),
);
