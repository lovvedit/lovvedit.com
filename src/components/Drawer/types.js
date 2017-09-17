import { concat } from 'ramda';

const moduleNamespace = 'drawer';
const addNamespace = concat(`${moduleNamespace}/`);

export default moduleNamespace;
export const TOGGLE = addNamespace('TOGGLE');
export const OPEN = addNamespace('OPEN');
export const CLOSE = addNamespace('CLOSE');
