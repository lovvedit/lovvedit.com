import React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { branch, renderComponent } from 'recompose';
import gql from 'graphql-tag';
import { last, compose } from 'ramda';

import PostList from './component';
import { selectors as homeSelectors } from '../../scenes/Home';

const FetchPostsQuery = gql`
  query FetchPosts($category: Category = SHOW, $after: String) {
    posts(filters: { category: $category }, pagination: { after: $after }) {
      edges {
        cursor
        node {
          id
          title
          likeCount
          liked
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

const toggleLikeSubscription = gql`
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
        document: toggleLikeSubscription,
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

const mapStateToProps = state => ({
  category: homeSelectors.getCategory(state),
});

const enhance = compose(
  connect(mapStateToProps),
  withPosts,
  branch(({ loading }) => loading, renderComponent(() => <div>loading...</div>)),
);

export default enhance(PostList);
