import fs from 'fs-extra';
import jsYaml from 'js-yaml';
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

export const readMd = async <T extends object>(
  file: string,
): Promise<T | null> => {
  const pattern = /^(-{3}(?:\n|\r)([\w\W]+?)(?:\n|\r)-{3})?([\w\W]*)*/;

  try {
    const content = await fs.readFile(file, 'utf8');
    const results = pattern.exec(content);

    return results !== null ? jsYaml.safeLoad(results[2]) : null;
  } catch (err) {
    if (err.name === 'YAMLException') {
      const error = Error(err.name);
      error.message = `${err.reason} found at line ${err.mark.line} in ${file}`;
      throw error;
    }
    throw err;
  }
};
