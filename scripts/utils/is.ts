export const is = {
  array: <T = unknown>(a: unknown): a is Array<T> => Array.isArray(a),
  boolean: (b: unknown): b is boolean => typeof b === 'boolean',
  func: (f: unknown): f is (...args: unknown[]) => unknown =>
    typeof f === 'function',
  notUndef: (v: unknown): v is unknown => v !== null && v !== undefined,
  number: (n: unknown): n is number => typeof n === 'number',
  string: (s: unknown): s is string => typeof s === 'string',
  object: (obj: unknown): obj is object =>
    obj && !is.array(obj) && typeof obj === 'object',
  undef: (v: unknown): v is undefined => v === null || v === undefined,
};
