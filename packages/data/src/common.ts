export type Description = string;

export type Links = Readonly<{
  title: 'Microsoft' | 'MDN' | 'W3C' | 'Wikipedia' | (string & {});
  url: string;
}>[];

export type Nullable<T> = T | null;

export const as = <T>(value: T): T => value;
