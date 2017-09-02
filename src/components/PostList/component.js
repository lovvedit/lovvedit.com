import React from 'react';
import PropTypes from 'prop-types';
import { compose, map } from 'ramda';

import Post, { postPropType } from './components/Post';

const renderPosts = posts =>
  compose(map(post => <Post post={post} key={post.id} />), map(edge => edge.node))(posts.edges);

const PostList = ({ posts, loadMorePosts }) => <div>{renderPosts(posts)}</div>;

PostList.propTypes = {
  posts: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({ node: postPropType })),
  }).isRequired,
  loadMorePosts: PropTypes.func.isRequired,
};

export default PostList;
