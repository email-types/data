#!/usr/bin/env node
import path from 'path';
import fs from 'fs-extra';
import mri from 'mri';
import { format, log } from '../utils';
import { Command } from '..';

const output = path.resolve(process.cwd(), '..', 'msotype', 'index.d.ts');

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
    log.info('generating declarations');
    const { generate } = await import('../mso');
    const declarations = generate();

    log.wait('formatting...');
    const content = await format(declarations, {
      printWidth: 120,
      parser: 'typescript',
    });

    log.wait('writing to disk...');
    await fs.writeFile(output, content);

    log.done(`successfully created msotype declaration: '${output}'`);
  } catch (error) {
    log.error(error);
    process.exit(0);
  }
};
