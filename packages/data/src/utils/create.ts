export const create = <U extends object>() => <T extends string = string>(
  data: Record<T, U>,
): Record<T, U> => data;
