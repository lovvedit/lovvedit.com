import { concat } from 'ramda';

const moduleNamespace = 'auth';
const addNamespace = concat(`${moduleNamespace}/`);

export default moduleNamespace;
export const LOGIN = addNamespace('LOGIN');
export const LOGOUT = addNamespace('LOGOUT');
