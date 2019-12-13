import mri from 'mri';
import { Command } from '..';
import { log, getConfig } from '../utils';
import { ProviderName } from '../utils/types';
import { download } from '../actions/download';
import { transform } from '../actions/transform';

export const command: Command = async (argv) => {
  const args = mri(argv, {
    alias: { c: 'cwd', d: 'download', f: 'force', h: 'help' },
    boolean: ['download', 'help', 'force'],
    string: ['cwd'],
    default: { cwd: process.cwd(), download: false, force: false },
  });

  const name = (args._[0] || 'caniemail') as ProviderName;

  try {
    const config = await getConfig(name, { cwd: args.cwd });

    if (args.download) {
      await download(name, config, { force: args.force });
    }

    await transform(name, config);
  } catch (error) {
    log.error(error);
    process.exit(0);
  }
};
