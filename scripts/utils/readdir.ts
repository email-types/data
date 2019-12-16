import fs from 'fs-extra';
import * as log from './log';

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
