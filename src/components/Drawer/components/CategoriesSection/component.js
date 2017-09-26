import React from 'react';
import { Home, Movie, Tv, Book } from 'material-ui-icons';
import { __ as _ } from 'ramda';

import StyledList from '../StyledList';
import Item from '../Item';
import { routes } from '../../../../utils';

const homeHot = routes.home(_, 'hot');

const CategoriesSection = () => (
  <StyledList>
    <Item text="All" to={{ pathname: routes.root() }} icon={<Home />} />
    <Item text="Movies" to={{ pathname: homeHot('movies') }} icon={<Movie />} />
    <Item text="Shows" to={{ pathname: homeHot('shows') }} icon={<Tv />} />
    <Item text="Books" to={{ pathname: homeHot('books') }} icon={<Book />} />
  </StyledList>
);

export default CategoriesSection;
