import { resolve } from 'path';

// @email-types package names
export const packages = ['data'] as const;

export type Package = typeof packages[number];

export const getPackagePath = (pkg: Package, ...paths: string[]): string =>
  resolve(process.cwd(), '../../packages', pkg, ...(paths || []));
