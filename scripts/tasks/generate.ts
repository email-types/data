import path from 'path';
import mri from 'mri';
import { Command } from '..';
import {
  log,
  getProvider,
  download,
  outputJson,
  readmd,
  ProviderName,
} from '../utils';

type Results = {
  warnings: string[];
  filepaths: string[];
};

const results: Results = { warnings: [], filepaths: [] };

export const command: Command = async (argv) => {
  const args = mri(argv, {
    alias: { c: 'cwd', d: 'download', h: 'help' },
    boolean: ['download', 'help'],
    string: ['cwd'],
    default: { cwd: process.cwd(), download: true },
  });

  const name = (args._[0] || 'caniemail') as ProviderName;

  try {
    log.info(`Generating data from ${name}`);
    const provider = await getProvider(name, { cwd: args.cwd });

    const files = await download(provider, { download: args.download });

    log.wait('Transforming and validating data...');
    await Promise.all(
      files.map(async (file: string) => {
        const src = path.join(provider.dataDist, file);
        const dist = path.join(
          provider.transformDist,
          file.replace('.md', '.json'),
        );

        const transformer = await provider.transform();
        const validator = await provider.validate();

        const content = await readmd(src);
        const data = await transformer(content);
        const { warnings } = validator(data);

        if (warnings.length !== 0) {
          results.warnings.push(`${file}: ${warnings.join(', ')}`);
        }

        const filepath = await outputJson(dist, data);
        results.filepaths.push(filepath);
      }),
    );

    if (results.warnings.length > 0) {
      log.warn(`Fix the following issues:\n${results.warnings.join('\n')}`);
    }

    log.done(`Successfully wrote ${results.filepaths.length} files to json`);
  } catch (error) {
    log.error(error);
    process.exit(0);
  }
};
