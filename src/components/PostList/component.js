import React from 'react';
import PropTypes from 'prop-types';
import { compose, map } from 'ramda';

import Post, { postPropType } from './components/Post';

const renderPosts = (posts, subscribeToLikeToggle) =>
  compose(
    map(post => (
      <Post post={post} subscribeToLikeToggle={subscribeToLikeToggle(post.id)} key={post.id} />
    )),
    map(edge => edge.node),
  )(posts.edges);

const PostList = ({ posts, loadMorePosts, subscribeToLikeToggle }) => (
  <div>{renderPosts(posts, subscribeToLikeToggle)}</div>
);

PostList.propTypes = {
  posts: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({ node: postPropType })),
  }).isRequired,
  loadMorePosts: PropTypes.func.isRequired,
  subscribeToLikeToggle: PropTypes.func.isRequired,
};

export default PostList;
