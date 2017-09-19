import * as routes from './routes';

describe('Route helpers', () => {
  describe('root()', () => {
    it('Should work correctly', () => {
      const goodRoute = '/';
      expect(routes.root()).toBe(goodRoute);
    });
  });

  describe('home()', () => {
    it('Should work correctly', () => {
      const category = 'movies';
      const sort = 'hot';
      const goodRoute = `/${category}/${sort}`;

      expect(routes.home(category, sort)).toBe(goodRoute);
    });
  });

  describe('signIn()', () => {
    it('Should work correctly', () => {
      const goodRoute = '/login';

      expect(routes.signIn()).toBe(goodRoute);
    });
  });

  describe('signUp()', () => {
    it('Should work correctly', () => {
      const goodRoute = '/signup';

      expect(routes.signUp()).toBe(goodRoute);
    });
  });

  describe('postDetail()', () => {
    it('Should work correctly', () => {
      const postId = 'post_id';
      const goodRoute = `/post/${postId}`;

      expect(routes.postDetail(postId)).toBe(goodRoute);
    });
  });

  describe('postCommentDetail()', () => {
    it('Should work correctly', () => {
      const postId = 'post_id';
      const commentId = 'comment_id';
      const goodRoute = `/post/${postId}/comment/${commentId}`;

      expect(routes.postCommentDetail(postId, commentId)).toBe(goodRoute);
    });
  });
});
