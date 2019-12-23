import fs from 'fs-extra';
import glob from 'tiny-glob';
import { log, getPackagePath, Package } from '../utils';

const extensions = 'types';

const importPattern = RegExp(
  `import(?:["'\\s]*[\\w*\\$\\{\\}\n\r\t, ]+from\\s*)?["'\\s]["'\\s](.*[@\\w_-]+\\.${extensions})["'\\s].*;$`,
  'gmi',
);

const clean = async (target: string): Promise<boolean> => {
  const source = target.replace('.d.ts', `.${extensions}.d.ts`);

  if (fs.existsSync(source)) {
    const content = await fs.readFile(target, 'utf-8');
    const [match] = content.match(importPattern) || [];

    if (match) {
      const types = await fs.readFile(source, 'utf-8');
      const next = content.replace(match, types.replace('export {};\n', ''));

      await fs.outputFile(target, next);
      await fs.remove(source);
      await fs.remove(source.replace('.d.ts', '.js'));
      return true;
    }
  }

  return false;
};

export const optimize = async (pkg: Package): Promise<void> => {
  const filepaths = await glob(`**/*.d.ts`, {
    cwd: getPackagePath(pkg, 'dist'),
    absolute: true,
  });

  log.wait(`Merging '*.types.d.ts' files with '*.d.ts'...`);
  const results = await Promise.all(filepaths.map(clean));

  log.done(`Optimized ${results.filter(Boolean).length} declaration files`);
};
