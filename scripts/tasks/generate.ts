import mri from 'mri';
import { Command } from '..';
import * as log from '../utils/log';
import { ProviderName } from '../utils/provider';
import { generate } from '../generate';

export const command: Command = async (argv) => {
  const args = mri(argv, {
    alias: { c: 'cwd', d: 'download', h: 'help' },
    boolean: ['download', 'help', 'force'],
    string: ['cwd'],
    default: { cwd: process.cwd(), download: false, force: false },
  });

  const name = (args._[0] || 'caniemail') as ProviderName;

  try {
    log.info(`Generating data from ${name}`);

    const results = await generate(name, {
      cwd: args.cwd,
      download: args.download,
    });

    if (results.warnings.length > 0) {
      log.warn(
        `You should fix the following issues:\n${results.warnings.join('\n')}`,
      );
    }

    log.done(`Successfully wrote ${results.outputs.length} files to json`);
  } catch (error) {
    log.error(error);
    process.exit(0);
  }
};
