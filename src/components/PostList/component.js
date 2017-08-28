import React from 'react';
import PropTypes from 'prop-types';
import { List, WindowScroller, InfiniteLoader } from 'react-virtualized';

const PostList = ({ posts, isRowLoaded, loadMoreRows, rowRenderer }) =>
  (<InfiniteLoader isRowLoaded={isRowLoaded} loadMoreRows={loadMoreRows} rowCount={posts.length}>
    {({ onRowsRendered, registerChild }) =>
      (<WindowScroller>
        {({ height, isScrolling, scrollTop }) =>
          (<List
            ref={registerChild}
            autoHeight
            height={height}
            isScrolling={isScrolling}
            scrollTop={scrollTop}
            rowRenderer={rowRenderer}
            onRowsRendered={onRowsRendered}
          />)}
      </WindowScroller>)}
  </InfiniteLoader>);

PostList.propTypes = {};

export default PostList;
