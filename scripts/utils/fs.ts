import fs from 'fs-extra';
import * as log from './log';

const jsonCleaner = (_: string, value: unknown): unknown => {
  if (value === null || value === '' || value === [] || value === {}) {
    return undefined;
  }
  return value;
};

export const outputJson = async (
  output: string,
  data: object,
  opts: {
    clean?: boolean;
    spaces?: number;
  } = {},
): Promise<void> => {
  const { clean = true, spaces = 0 } = opts;
  const replacer = clean ? jsonCleaner : undefined;

  await fs.outputJson(output, data, { replacer, spaces });
};

export const readdir = async (
  src: string,
  filter?: RegExp,
): Promise<string[]> => {
  const filenames = await fs.readdir(src);

  if (filenames.length === 0) {
    log.error('No data files to transform.');
    process.exit(0);
  }

  return filter
    ? filenames.filter((filename) => filter.test(filename))
    : filenames;
};
