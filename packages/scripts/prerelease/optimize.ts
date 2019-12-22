import fs from 'fs-extra';
import glob from 'tiny-glob';
import { log, getPackagePath, Filtered, Package } from '../utils';

const extension = '.types';

const patternImport = RegExp(
  `import(?:["'\\s]*[\\w*\\$\\{\\}\n\r\t, ]+from\\s*)?["'\\s]["'\\s](.*[@\\w_-]+\\${extension})["'\\s].*;$`,
  'gmi',
);

type ParsedFile = Record<'target' | 'source' | 'empty', string>;

const parse = (filepath: string): ParsedFile => ({
  target: filepath.replace(extension, ''),
  empty: filepath.replace('.d.ts', '.js'),
  source: filepath,
});

const clean = (content: string): string => {
  return content.replace('export {};', '').trim();
};

const merge = async (filepath: string): Promise<ParsedFile | undefined> => {
  const parsed = parse(filepath);

  const targetContent = await fs.readFile(parsed.target, 'utf-8');
  const match = targetContent.match(patternImport);

  if (match !== null && match[0].length > 0) {
    const sourceContent = await fs.readFile(parsed.source, 'utf-8');
    const content = targetContent.replace(match[0], clean(sourceContent));

    await fs.outputFile(parsed.target, content);
    return parsed;
  }
};

const remove = async ({ empty, source }: ParsedFile): Promise<string> => {
  await Promise.all([empty, source].map((f) => fs.remove(f)));
  return source;
};

const optimize = async (pkg: Package): Promise<void> => {
  const files = await glob(`**/*${extension}.d.ts`, {
    cwd: getPackagePath(pkg, 'dist'),
    absolute: true,
  });

  log.wait(`Merging '*.types.d.ts' files with '*.d.ts'...`);
  const merged = await Promise.all(files.map(merge));

  log.wait(`Removing merged type declaration files...`);
  const removed = await Promise.all(
    merged.filter((Boolean as unknown) as Filtered).map(remove),
  );

  log.done(`Optimized dist by removing ${removed.length} files`);
};

export default optimize;
