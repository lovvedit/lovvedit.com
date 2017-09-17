import { getTitle } from './selectors';

describe('getTitle()', () => {
  it('should return the title', () => {
    const title = 'test_title';
    const state = { appBar: { title } };
    expect(getTitle(state)).toBe(title);
  });
});
