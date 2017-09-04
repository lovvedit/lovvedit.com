import { curry } from 'ramda';

const categoryMap = new Map([
  ['all', null],
  ['movies', 'MOVIE'],
  ['shows', 'SHOW'],
  ['books', 'BOOK'],
  ['songs', 'SONG'],
]);

const sortMap = new Map([['hot', 'HOT'], ['new', 'NEW'], ['top', 'TOP']]);

export const mapper = curry(dict => key => dict.get(key));

export const mapRouteParamToCategory = mapper(categoryMap);
export const mapRouteParamToSort = mapper(sortMap);
