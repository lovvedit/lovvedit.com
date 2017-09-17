import { curry, always, concat } from 'ramda';

export const root = always('/');
export const home = curry((category, sort) => `/${category}/${sort}`);

export const signIn = always('/login');
export const signUp = always('/signup');

export const postDetail = concat('/post/');
export const postCommentDetail = curry(
  (postId, commentId) => `/post/${postId}/comment/${commentId}`,
);
