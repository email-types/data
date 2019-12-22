import fs from 'fs-extra';
import glob from 'tiny-glob';
import { log, getPackagePath, Package } from '../utils';

const emptyFileLength = (): number => {
  return '"use strict";'.length;
};

const remove = async (file: string): Promise<string | undefined> => {
  const { size } = await fs.stat(file);

  if (size === emptyFileLength()) {
    await fs.remove(file);
    return file;
  }
};

export const removeEmpty = async (pkg: Package): Promise<void> => {
  log.wait(`Removing empty js files from the dist`);

  const files = await glob('*/*.js', {
    cwd: getPackagePath(pkg, 'dist'),
    absolute: true,
  });

  const removed = await Promise.all(files.map(remove));
  const results = (removed.filter(Boolean) as unknown) as string[];
  log.done(`Successfully removed ${results.length} empty files from dist`);
};
