import { mapper } from './routeParamMappers';

describe('mapper()', () => {
  it('should return a dict mapper', () => {
    const key = 'key';
    const value = 'value';
    const dict = new Map([[key, value]]);

    const mapDict = mapper(dict);

    expect(mapDict(key)).toBe(value);
    expect(mapDict(key)).not.toBe(`bad_${value}`);
  });
});
