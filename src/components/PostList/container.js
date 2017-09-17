import React from 'react';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { branch, renderComponent, mapProps } from 'recompose';
import gql from 'graphql-tag';
import { last, compose } from 'ramda';
import { CircularProgress } from 'material-ui';

import PostList from './component';
import { mapRouteParamToCategory, mapRouteParamToSort } from './services/mappers';

const FetchPostsQuery = gql`
  query FetchPosts($category: Category, $after: String) {
    posts(filters: { category: $category }, after: $after) {
      edges {
        cursor
        node {
          id
          title
          likeCount
          liked
          commentCount
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

const ToggleLikeSubscription = gql`
  subscription PostLikeToggled($id: ID!) {
    postLikeToggled(id: $id) {
      id
      likeCount
      liked
    }
  }
`;

const withPosts = graphql(FetchPostsQuery, {
  options: ({ category, after = null }) => ({ variables: { category, after } }),
  props: ({ ownProps: { category }, data: { posts, loading, fetchMore, subscribeToMore } }) => ({
    posts,
    category,
    loading,
    subscribeToLikeToggle: postId => () =>
      subscribeToMore({
        document: ToggleLikeSubscription,
        variables: { id: postId },
      }),
    loadMorePosts: () =>
      fetchMore({
        variables: { after: last(posts.edges).cursor, category },
        updateQuery: (previousResult, { fetchMoreResult: { posts: newPosts } }) => ({
          ...previousResult,
          posts: {
            edges: [...previousResult.edges, ...newPosts.edges],
          },
        }),
      }),
  }),
});

const enhance = compose(
  withRouter,
  mapProps(props => ({
    ...props,
    category: mapRouteParamToCategory(props.match.params.category),
    sort: mapRouteParamToSort(props.match.params.sort),
  })),
  withPosts,
  branch(({ loading }) => loading, renderComponent(() => <CircularProgress />)),
);

export default enhance(PostList);