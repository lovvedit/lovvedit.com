import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IconButton } from 'material-ui';
import { ThumbUp, Comment } from 'material-ui-icons';
import styled from 'styled-components';

import { postDetail } from '../../../../../../services/routes';

const StyledButtonText = styled.span`
  margin-left: 0.3rem;
  margin-right: 1rem;
`;

const StyledIconButton = styled(IconButton)`vertical-align: middle;`;

const ButtonBar = ({ post, onLikeClick }) => (
  <div>
    <StyledIconButton color={post.liked ? 'accent' : 'default'} onClick={onLikeClick}>
      <ThumbUp />
    </StyledIconButton>
    <StyledButtonText>{post.likeCount}</StyledButtonText>
    <Link to={postDetail(post.id)}>
      <StyledIconButton>
        <Comment />
      </StyledIconButton>
      <StyledButtonText>{post.commentCount}</StyledButtonText>
    </Link>
  </div>
);

ButtonBar.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    likeCount: PropTypes.number,
    liked: PropTypes.bool,
    commentCount: PropTypes.number,
  }).isRequired,
  onLikeClick: PropTypes.func.isRequired,
};

export default ButtonBar;
