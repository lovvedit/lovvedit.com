import { concat } from 'ramda';

const moduleNamespace = 'appBar';

export default moduleNamespace;

export const addNamespace = concat(`${moduleNamespace}/`);

export const MENU_CLICK = addNamespace('MENU_CLICK');
export const SET_TITLE = addNamespace('SET_TITLE');
export const LOG_OUT = addNamespace('LOG_OUT');
