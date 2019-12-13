import proc from 'child_process';
import { promisify } from 'util';
import { log } from '../utils';
import { Config, ProviderName } from '../utils/types';

type Options = {
  force?: boolean;
};

const exec = promisify(proc.exec);

export const download = async (
  provider: ProviderName,
  config: Config,
  opts: Options = {},
): Promise<void> => {
  const { dataDist, dataUrl } = config;
  const { force } = opts;

  log.wait(`Downloading latest from ${provider}...`);

  await exec(`svn export ${dataUrl} ${dataDist} -q ${force ? '--force' : ''}`);
};
