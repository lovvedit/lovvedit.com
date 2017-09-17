import { concat } from 'ramda';

const namespace = 'drawer';
const addNamespace = concat(`${namespace}/`);

export default namespace;
export const TOGGLE = addNamespace('TOGGLE');
export const OPEN = addNamespace('OPEN');
export const CLOSE = addNamespace('CLOSE');
