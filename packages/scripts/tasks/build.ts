import { transfer } from '../transfer';
import { log } from '../utils';

const pkgs = [
  {
    name: 'dataTypes',
    input: 'mdn-data/css/types.json',
    output: 'dist/css/data-types.js',
    message: 'css data types from mdn-data',
  },
];

(async (): Promise<void> => {
  try {
    log.info('Running build task...');
    await transfer(pkgs);
    log.done('Successfully ran build task');
  } catch (error) {
    log.error(error);
    process.exit(0);
  }
})();
