import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IconButton } from 'material-ui';
import { ThumbUp, Comment } from 'material-ui-icons';
import { prop } from 'ramda';
import styled from 'styled-components';

import { routes } from '../../../../../../utils';

const propColor = prop('color');

const StyledButtonText = styled.span`
  color: ${propColor};

  margin-left: 0.3rem;
  margin-right: 1rem;
`;

const StyledCommentsLink = styled(Link)`
  color: ${propColor};
  text-decoration: none;
`;

const StyledIconButton = styled(IconButton)`vertical-align: middle;`;

const ButtonBar = ({ post, onLikeClick, theme, className }) => (
  <div className={className}>
    <StyledIconButton color={post.liked ? 'accent' : 'default'} onClick={onLikeClick}>
      <ThumbUp />
    </StyledIconButton>
    <StyledButtonText color={theme.palette.text.secondary}>{post.likeCount}</StyledButtonText>
    <StyledCommentsLink to={routes.postDetail(post.id)}>
      <StyledIconButton>
        <Comment />
      </StyledIconButton>
      <StyledButtonText color={theme.palette.text.secondary}>{post.commentCount}</StyledButtonText>
    </StyledCommentsLink>
  </div>
);

/* eslint-disable react/forbid-prop-types */
ButtonBar.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    likeCount: PropTypes.number,
    liked: PropTypes.bool,
    commentCount: PropTypes.number,
  }).isRequired,
  onLikeClick: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  className: PropTypes.string,
};
/* eslint-enable react/forbid-prop-types */

ButtonBar.defaultProps = {
  className: null,
};

export default ButtonBar;
