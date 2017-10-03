import React from 'react';
import { shape, arrayOf, func } from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import { compose, map, prop } from 'ramda';

import Post, { postPropType } from './components/Post';
import FadeUpTransition from '../FadeUpTransition';

const renderPosts = compose(
  map(post => (
    <FadeUpTransition key={post.id}>
      <Post post={post} />
    </FadeUpTransition>
  )),
  map(prop('node')),
  prop('edges'),
);

const PostList = ({ posts, loadMorePosts }) => (
  <TransitionGroup>{renderPosts(posts)}</TransitionGroup>
);

PostList.propTypes = {
  posts: shape({
    edges: arrayOf(shape({ node: postPropType })),
  }).isRequired,
  loadMorePosts: func.isRequired,
};

export default PostList;
