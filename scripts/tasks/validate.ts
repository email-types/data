import mri from 'mri';
import { log } from '../utils';
import { Command } from '..';

type Result = { data: number; result: number };

const interopt = async (path: string): Promise<Result> => {
  const { default: validate } = await import(`${path}`);
  return validate();
};

export const command: Command = async (argv) => {
  const args = mri(argv, {
    alias: { h: 'help' },
    boolean: ['help'],
  });

  if (args.help) {
    console.info('TODO: `emailtypes validate --help`');
    process.exit(0);
  }

  try {
    const [developers, doctypes] = await Promise.all([
      interopt('../validations/developers'),
    ]);

    const results = { developers, doctypes };
    console.log('results', results);

    // console.log(developers, scheme);
  } catch (error) {
    log.error(error);
    process.exit(0);
  }
};
