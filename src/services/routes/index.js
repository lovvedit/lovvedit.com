import { curry, always } from 'ramda';

export const root = always('/');
export const home = curry((category, sort) => `/${category}/${sort}`);

export const signIn = always('/login');
export const signUp = always('/signup');

export const postDetail = postId => `/post/${postId}`;
export const postCommentDetail = curry(
  (postId, commentId) => `/post/${postId}/comment/${commentId}`,
);
