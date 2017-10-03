import React from 'react';
import { object, string, shape, number, bool, func } from 'prop-types';
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
  post: shape({
    id: string,
    likeCount: number,
    liked: bool,
    commentCount: number,
  }).isRequired,
  onLikeClick: func.isRequired,
  theme: object.isRequired,
  className: string,
};
/* eslint-enable react/forbid-prop-types */

ButtonBar.defaultProps = {
  className: null,
};

export default ButtonBar;
