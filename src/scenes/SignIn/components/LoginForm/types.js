import { concat, compose } from 'ramda';

import { addNamespace as addParentNamespace } from '../../types';

const moduleNamespace = 'loginForm';

export default moduleNamespace;

export const addNamespace = compose(addParentNamespace, concat(`${moduleNamespace}/`));

export const LOG_IN = addNamespace('LOG_IN');
