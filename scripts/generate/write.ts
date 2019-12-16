import fs from 'fs-extra';
import { join } from 'path';
import { TransformResults } from './transform';
import { is } from '../utils/is';

const cleaner = (_: string, value: unknown): unknown => {
  if (is.undef(value) || value === '') return undefined;
  return value;
};

export const write = async <T extends object>(
  dist: string,
  data: TransformResults<T>,
  opts: {
    clean?: boolean;
    spaces?: number;
  } = {},
): Promise<string> => {
  const { clean = true, spaces = 0 } = opts;
  const replacer = clean ? cleaner : undefined;

  const output = join(dist, `${data.name}.json`);
  await fs.outputJson(output, data, { replacer, spaces });
  return output;
};
