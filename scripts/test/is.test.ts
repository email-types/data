import { is } from '../utils/is';

describe('array', () => {
  it('returns true if the value is an array', () => {
    expect(is.array([])).toBe(true);
  });

  it('returns false if the value is not an array', () => {
    expect(is.array(() => [])).toBe(false);
  });
});

describe('boolean', () => {
  it('returns true if the value is a boolean', () => {
    expect(is.boolean(true)).toBe(true);
  });

  it('returns false if the value is not a boolean', () => {
    expect(is.boolean(() => [])).toBe(false);
  });
});

describe('func', () => {
  it('returns true if the value is a function', () => {
    expect(is.func(() => {})).toBe(true);
  });

  it('returns false if the value is not a function', () => {
    expect(is.func({})).toBe(false);
  });
});

describe('notUndef', () => {
  it('returns true if the value is not undefined', () => {
    expect(is.notUndef('')).toBe(true);
  });

  it('returns false if the value is undefined', () => {
    expect(is.notUndef(null)).toBe(false);
  });
});

describe('number', () => {
  it('returns true if the value is a number', () => {
    expect(is.number(0.1)).toBe(true);
  });

  it('returns false if the value is not a number', () => {
    expect(is.number('1')).toBe(false);
  });
});

describe('string', () => {
  it('returns true if the value is a string', () => {
    expect(is.string('foo')).toBe(true);
  });

  it('returns false if the value is not a string', () => {
    expect(is.string(() => 'foo')).toBe(false);
  });
});

describe('object', () => {
  it('returns true if the value is an object', () => {
    expect(is.object({})).toBe(true);
  });

  it('returns false if the value is not an object', () => {
    expect(is.object(() => {})).toBe(false);
  });
});

describe('undef', () => {
  it('returns true if the value is undefined', () => {
    expect(is.undef(undefined)).toBe(true);
  });

  it('returns false if the value is not undefined', () => {
    expect(is.undef('')).toBe(false);
  });
});
