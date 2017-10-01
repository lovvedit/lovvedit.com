import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Paper, Typography } from 'material-ui';
import styled from 'styled-components';

import ButtonBar from './components/ButtonBar';

const StyledPaper = styled(Paper)`
  padding: 1rem 1rem 0.3rem;
  margin: 1rem auto;

  background-color: hsla(0, 0%, 14%, 1) !important;
`;

const StyledTitle = styled(Typography)`margin-left: 0.7rem !important;`;

const StyledTitleLink = styled(Link)`
  text-decoration: none;
  color: hsla(0, 100%, 100%, 1);

  &:visited {
    color: hsla(0, 0%, 60%, 1);
  }
`;

const StyledButtonBar = styled(ButtonBar)`margin-top: 0.5rem;`;

const Post = ({ post, onLikeClick }) => (
  <StyledPaper elevation={4}>
    <StyledTitle type="title">
      <StyledTitleLink to={`/posts/${post.id}`}>{post.title}</StyledTitleLink>
    </StyledTitle>
    <StyledButtonBar post={post} onLikeClick={onLikeClick} />
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
