import React from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup } from 'react-transition-group';
import { compose, map, prop } from 'ramda';
import styled from 'styled-components';

import Post, { postPropType } from './components/Post';
import FadeUpTransition from '../FadeUpTransition';

const StyledPost = styled(Post)`${({ state }) => state === 'entering'};`;

const renderPosts = (posts, subscribeToLikeToggle) =>
  compose(
    map(post => (
      <FadeUpTransition key={post.id}>
        <StyledPost post={post} subscribeToLikeToggle={subscribeToLikeToggle(post.id)} />
      </FadeUpTransition>
    )),
    map(prop('node')),
  )(posts.edges);

const PostList = ({ posts, loadMorePosts, subscribeToLikeToggle }) => (
  <TransitionGroup>{renderPosts(posts, subscribeToLikeToggle)}</TransitionGroup>
);

PostList.propTypes = {
  posts: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({ node: postPropType })),
  }).isRequired,
  loadMorePosts: PropTypes.func.isRequired,
  subscribeToLikeToggle: PropTypes.func.isRequired,
};

export default PostList;
