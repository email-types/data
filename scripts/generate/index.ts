import proc from 'child_process';
import { promisify } from 'util';
import * as log from '../utils/log';
import { readdir } from '../utils/fs';
import { getConfig } from '../utils/config';
import { transform } from './transform';
import { validate } from './validate';
import { write } from './write';
import { ProviderName, getProvider } from '../utils/provider';

type Options = {
  cwd?: string;
  download?: boolean;
};

type Results = {
  warnings: string[];
  outputs: string[];
};

const exec = promisify(proc.exec);

const results: Results = { warnings: [], outputs: [] };

export const generate = async (name: ProviderName, opts: Options = {}) => {
  const provider = getProvider(name);
  const config = await getConfig(provider, { cwd: opts.cwd });

  if (opts.download) {
    log.wait(`Downloading latest from ${name}...`);
    await exec(`svn export ${config.dataUrl} ${config.dataDist} -q --force`);
  }

  log.wait('Transforming and validating data...');
  const filenames = await readdir(config.dataDist, config.transformFilter);

  await Promise.all(
    filenames.map(async (filename: string) => {
      const data = await transform(filename, provider, config);

      const warning = await validate(provider, data);
      if (warning.length !== 0) {
        results.warnings.push(warning);
      }

      const output = await write(config.transformDist, data);
      results.outputs.push(output);
    }),
  );

  return results;
};
