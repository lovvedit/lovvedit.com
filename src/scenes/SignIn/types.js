import { concat } from 'ramda';

const moduleNamespace = 'signIn';

export default moduleNamespace;

export const addNamespace = concat(`${moduleNamespace}/`);
