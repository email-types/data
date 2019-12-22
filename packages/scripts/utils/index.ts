import * as log from './log';

export * from './constants';
export { log };

export type Filtered = <T>(x: T | false | undefined) => x is T;
