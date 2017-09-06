import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from 'material-ui';
import styled from 'styled-components';

import Link from '../../../Link';
import ButtonBar from './components/ButtonBar';

const StyledPaper = styled(Paper)`
  padding: 1rem 2rem 0.5rem;
  margin: 1rem auto;
`;

const ButtonBarWrapper = styled.div`margin-top: 0.5rem;`;

const Post = ({ post, onLikeClick }) => (
  <StyledPaper elevation={4}>
    <Typography type="title">
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </Typography>
    <ButtonBarWrapper>
      <ButtonBar post={post} onLikeClick={onLikeClick} />
    </ButtonBarWrapper>
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
