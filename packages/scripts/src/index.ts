#!/usr/bin/env node
import mri from 'mri';
import { log } from './utils';

export type Command = (argv: readonly string[]) => void;

const defaultCmd = 'mso';
const cmds: { [cmd: string]: () => Promise<Command> } = {
  /* eslint-disable import/no-cycle */
  mso: async () => import('./cli/mso').then((c) => c.command),
  // download: async () => import('./download').then((c) => c.command),
  /* eslint-enable import/no-cycle */
};

const args = mri(process.argv.slice(2), {
  alias: { h: 'help' },
  boolean: ['help'],
});

// Check if we are running `emailtype <cmd>` or `emailtype` and set the correct cmd
const foundCmd = Boolean(cmds[args._[0]]);
const cmd = foundCmd ? args._[0] : defaultCmd;
const cmdArgs = foundCmd ? process.argv.slice(3) : process.argv.slice(2);

if (args.help && !foundCmd) {
  console.info('TODO: `emailtypes --help`');
  process.exit(0);
}

(async (): Promise<void> => {
  try {
    const exec = await cmds[cmd]();
    exec(cmdArgs);
  } catch (error) {
    log.error(error);
    process.exit(0);
  }
})();

process.on('unhandledRejection', (reason, p) => {
  log.error(`Unhandled Rejection: Promise: ${p} | reason: ${reason}`);
  process.exit(1);
});
