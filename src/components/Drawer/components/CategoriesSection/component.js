import React from 'react';
import HomeIcon from 'material-ui-icons/Home';
import MovieIcon from 'material-ui-icons/Movie';
import TvIcon from 'material-ui-icons/Tv';
import BookIcon from 'material-ui-icons/Book';
import { __ as _ } from 'ramda';

import StyledList from '../StyledList';
import Item from '../Item';
import { routes } from '../../../../utils';

const homeHot = routes.home(_, 'hot');

const CategoriesSection = () => (
  <StyledList>
    <Item text="All" to={{ pathname: routes.root() }} icon={<HomeIcon />} />
    <Item text="Movies" to={{ pathname: homeHot('movies') }} icon={<MovieIcon />} />
    <Item text="Shows" to={{ pathname: homeHot('shows') }} icon={<TvIcon />} />
    <Item text="Books" to={{ pathname: homeHot('books') }} icon={<BookIcon />} />
  </StyledList>
);

export default CategoriesSection;
