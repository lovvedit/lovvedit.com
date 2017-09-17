import { concat } from 'ramda';

const moduleNamespace = 'user';
const addNamespace = concat(`${moduleNamespace}/`);

export default moduleNamespace;
export const LOGIN = addNamespace('SET_USER');
export const LOGOUT = addNamespace('REMOVE_USER');
