import { getTitle } from './selectors';
import moduleNamespace from './types';

describe('getTitle()', () => {
  it('should return the title', () => {
    const title = 'test_title';
    const state = { [moduleNamespace]: { title } };
    expect(getTitle(state)).toBe(title);
  });
});
