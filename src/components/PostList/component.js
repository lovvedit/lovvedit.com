import React from 'react';
import PropTypes from 'prop-types';
import { List, WindowScroller, InfiniteLoader, AutoSizer } from 'react-virtualized';

const PostList = ({ posts, isRowLoaded, loadMoreRows, rowRenderer, rowCount }) => (
  <div>
    <InfiniteLoader isRowLoaded={isRowLoaded} loadMoreRows={loadMoreRows} rowCount={rowCount}>
      {({ onRowsRendered, registerChild }) => (
        <WindowScroller>
          {({ height, isScrolling, scrollTop }) => (
            <AutoSizer disableHeight>
              {({ width }) => (
                <List
                  ref={registerChild}
                  autoHeight
                  height={height}
                  width={width}
                  rowHeight={20}
                  rowCount={rowCount}
                  isScrolling={isScrolling}
                  scrollTop={scrollTop}
                  rowRenderer={rowRenderer}
                  onRowsRendered={onRowsRendered}
                />
              )}
            </AutoSizer>
          )}
        </WindowScroller>
      )}
    </InfiniteLoader>;
  </div>
);

PostList.propTypes = {};

export default PostList;
