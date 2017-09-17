import { path } from 'ramda';

import moduleNamespace from './types';

// eslint-disable-next-line import/prefer-default-export
export const getState = path([moduleNamespace, 'open']);
