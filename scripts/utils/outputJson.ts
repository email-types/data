import fs from 'fs-extra';
import { is } from './is';

const cleaner = (_: string, value: unknown): unknown => {
  if (is.undef(value) || value === '') return undefined;
  return value;
};

type Options = {
  clean?: boolean;
  spaces?: number;
};

export const outputJson = async <T extends object>(
  output: string,
  data: T,
  opts: Options = {},
): Promise<string> => {
  const { clean = true, spaces = 0 } = opts;
  const replacer = clean ? cleaner : undefined;

  await fs.outputJson(output, data, { replacer, spaces });
  return output;
};
