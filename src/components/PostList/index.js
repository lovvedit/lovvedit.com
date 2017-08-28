import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { withProps } from 'recompose';
import { last, compose } from 'ramda';

import PostList from './component';

const FetchPostQuery = gql`
  query FetchPosts($category: Category) {
    posts(filters: { category: $category }) {
      edges {
        node {
          title
        }
      }
    }
  }
`;

const withPosts = graphql(FetchPostQuery, {
  options: ({ category }) => ({ variables: { category } }),
  props: ({ ownProps: { category }, data: { posts, fetchMore, loading } }) => ({
    loading,
    posts,
    category,
    loadMoreRows: () =>
      fetchMore({
        query: FetchPostQuery,
        variables: { after: last(posts.edges).cursor, category },
        updateQuery: ({ entry }, { fetchMoreResult: { posts: newPosts } }) => ({
          entry: {
            posts: [...entry.posts, ...newPosts],
          },
        }),
      }),
  }),
});

const rowRenderer = () => <div>hola</div>;

const enhance = compose(withProps({ rowRenderer }), withPosts);

export default enhance(PostList);
