import proc from 'child_process';
import { promisify } from 'util';
import { readdir } from './readdir';
import { Provider } from './provider';
import * as log from './log';

type Options = {
  download?: boolean;
};

const exec = promisify(proc.exec);

export const download = async (
  provider: Provider,
  opts: Options,
): Promise<string[]> => {
  const { download: shouldDownload } = opts;
  const { dataUrl, dataDist, transformFilter } = provider;

  if (shouldDownload) {
    log.wait(`Downloading latest from ${provider.name}...`);
    await exec(`svn export ${dataUrl} ${dataDist} -q --force`);
  }

  const files = await readdir(dataDist, transformFilter);
  return files;
};
