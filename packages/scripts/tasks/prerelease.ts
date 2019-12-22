import { removeEmpty } from '../prerelease/removeEmpty';
import { log } from '../utils';

(async (): Promise<void> => {
  try {
    log.info('Running prerelease task...');
    await removeEmpty('data');
    log.done('Successfully ran prerelease task');
  } catch (error) {
    log.error(error);
    process.exit(0);
  }
})();
