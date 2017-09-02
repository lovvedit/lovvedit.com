import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from 'material-ui';
import styled from 'styled-components';

const StyledPaper = styled(Paper)`
  padding: 1rem 2rem;
  margin: 1rem auto;
`;

const Post = ({ post, onLikeClick }) => (
  <StyledPaper elevation={4}>
    <Typography type="title">{post.title}</Typography>
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
