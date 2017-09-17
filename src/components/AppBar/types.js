import { concat } from 'ramda';

const namespace = 'appbar';
const addNamespace = concat(`${namespace}/`);

export default namespace;
export const MENU_CLICK = addNamespace('MENU_CLICK');
export const SET_TITLE = addNamespace('SET_TITLE');
