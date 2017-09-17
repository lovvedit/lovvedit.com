import { concat } from 'ramda';

const moduleNamespace = 'appBar';
const addNamespace = concat(`${moduleNamespace}/`);

export default moduleNamespace;
export const MENU_CLICK = addNamespace('MENU_CLICK');
export const SET_TITLE = addNamespace('SET_TITLE');
