import mri from 'mri';
import { log } from '../utils';
import { Command } from '..';

export const command: Command = async (argv) => {
  const args = mri(argv, {
    alias: { h: 'help' },
    boolean: ['help'],
  });

  if (args.help) {
    console.info('TODO: `emailtypes build --help`');
    process.exit(0);
  }

  try {
    log.info('ran @email-types/scripts');
  } catch (error) {
    log.error(error);
    process.exit(0);
  }
};
