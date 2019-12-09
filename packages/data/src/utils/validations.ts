import {
  validate as validateType,
  Any,
  Nullable,
  Optional,
  Primitive,
} from 'validate-typescript';

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

export const OneOfType = <T extends ReadonlyArray<any>>(
  arr: T,
): ValueType<T> => {
  return Any([...arr.map((n) => n)]);
};

export const OneOfTypeOrNull = <T extends ReadonlyArray<any>>(
  arr: T,
): ValueType<T> | null => {
  return Any([...arr.map((n) => n), null]);
};

export const MulipleOfType = <T extends ReadonlyArray<any>>(
  arr: T,
): ValueType<T>[] => {
  return Any([arr.map((n) => n)]);
};

export const MulipleOfTypeOrNull = <T extends ReadonlyArray<any>>(
  arr: T,
): ValueType<T>[] | null => {
  return Any([Nullable(arr.map((n) => n))]);
};

export const OptionalString = () => Optional(Primitive(String));

export const NullableString = () => Nullable(Primitive(String));

export const createValidation = <T>(schema: T) => (...data: T[]): T[] => {
  data.forEach((d) => validateType(schema, d));
  return data;
};
