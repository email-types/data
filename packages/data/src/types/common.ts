/* eslint-disable @typescript-eslint/no-explicit-any */
type ValueType<
  T extends ReadonlyArray<any> | ArrayLike<any> | Record<any, any>
> = T extends ReadonlyArray<any>
  ? T[number]
  : T extends ArrayLike<any>
  ? T[number]
  : T extends object
  ? T[keyof T]
  : never;

export type ValuesOfKey<
  T extends ReadonlyArray<any> | ArrayLike<any> | Record<any, any>,
  K extends keyof ValueType<T>
> = ValueType<T>[K] extends string
  ? ValueType<T>[K]
  : ValueType<ValueType<T>[K]>;

export type Link = {
  title: 'Microsoft' | 'MDN' | 'W3C' | 'Wikipedia' | (string & {});
  url: string;
};
