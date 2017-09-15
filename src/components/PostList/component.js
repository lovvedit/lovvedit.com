import React from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';
import { compose, map } from 'ramda';
import styled from 'styled-components';

import Post, { postPropType } from './components/Post';

const StyledPost = styled(Post)`${({ state }) => state === 'entering'};`;

const renderPosts = (posts, subscribeToLikeToggle) =>
  compose(
    map(post => (
      <Transition>
        {state => (
          <StyledPost
            post={post}
            subscribeToLikeToggle={subscribeToLikeToggle(post.id)}
            key={post.id}
            state={state}
          />
        )}
      </Transition>
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
