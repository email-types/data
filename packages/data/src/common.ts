export type Nullable<T> = T | null;

/* An `Unsure` value type. Means that we have zero idea as it's likely not been tested */
export type UnsureOrType<T> = T | 'Unsure';

/* Description value type */
export type Description = string;

/* Reference a specific key's values from a different type */
export type $Ref<
  T extends object,
  K extends keyof T | string = 'name'
> = K extends keyof T ? T[K] : never;

export type Links = Readonly<{
  title: 'Microsoft' | 'MDN' | 'W3C' | 'Wikipedia' | (string & {});
  url: string;
}>[];
