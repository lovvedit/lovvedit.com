import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, IconButton } from 'material-ui';
import { PlusOne } from 'material-ui-icons';
import styled from 'styled-components';

import Link from '../../../Link';

const StyledPaper = styled(Paper)`
  padding: 1rem 2rem;
  margin: 1rem auto;
`;

const Post = ({ post, onLikeClick }) => (
  <StyledPaper elevation={4}>
    <Typography type="title">
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </Typography>
    <IconButton liked={post.liked} onClick={onLikeClick}>
      <PlusOne />
    </IconButton>
    {post.likeCount} likes. liked: {(post.liked && <span>si</span>) || <span>no</span>}
  </StyledPaper>
);

export const postPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
});

Post.propTypes = {
  post: postPropType.isRequired,
  onLikeClick: PropTypes.func.isRequired,
};

export default Post;
