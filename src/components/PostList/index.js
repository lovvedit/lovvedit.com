import React from 'react';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withProps, mapProps } from 'recompose';
import { last, compose } from 'ramda';

import PostList from './component';

const FetchPostsQuery = gql`
  query FetchPosts($category: Category = SHOW) {
    posts(filters: { category: $category }) {
      edges {
        cursor
        node {
          title
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

const FetchMorePostsQuery = gql`
  query FetchMorePosts($category: Category = SHOW, $after: String!) {
    posts(filters: { category: $category }, pagination: { after: $after }) {
      edges {
        cursor
        node {
          title
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

const withPosts = graphql(FetchPostsQuery, {
  options: ({ category }) => ({ variables: { category } }),
  props: ({ ownProps: { category }, data: { posts: { edges }, fetchMore, loading } }) => ({
    loading,
    category,
    rowCount: edges.length,
    loadMoreRows: () =>
      fetchMore({
        query: FetchMorePostsQuery,
        variables: { after: last(edges).cursor, category },
        updateQuery: ({ entry }, { fetchMoreResult: { posts: newPosts } }) => ({
          entry: {
            posts: [...entry.posts, ...newPosts],
          },
        }),
      }),
  }),
});

const rowRenderer = ({ key, style }) => (
  <div key={key} style={style}>
    hola
  </div>
);

const enhance = compose(
  withRouter,
  withProps({ rowRenderer, isRowLoaded: () => true }),
  withPosts,
  mapProps(props => ({ ...props, category: props.match.params.category })),
);

export default enhance(PostList);
