/**
 * Utility functions to map route params to GraphQL enum types.
 */

import { curry } from 'ramda';

// Categories.
const categoryMap = new Map([
  ['all', null],
  ['movies', 'MOVIE'],
  ['shows', 'SHOW'],
  ['books', 'BOOK'],
  ['songs', 'SONG'],
]);

// Sorts.
const sortMap = new Map([['hot', 'HOT'], ['new', 'NEW'], ['top', 'TOP']]);

export const mapper = curry((dict, key) => dict.get(key));

export const category = mapper(categoryMap);
export const sort = mapper(sortMap);
