import { resolve } from 'path';
import { getProvider } from './getProvider';
import { Config, ProviderName } from './types';

type Options = {
  cwd?: string;
  download?: boolean;
};

export const getConfig = async (
  name: ProviderName,
  opts: Options,
): Promise<Config> => {
  const { cwd = process.cwd() } = opts;

  const provider = getProvider(name);
  const {
    dataUrl,
    dataDist,
    transformDist,
    transformIgnore = [],
  } = await provider.config();

  return {
    dataUrl,
    dataDist: resolve(cwd, '.data', name, dataDist),
    transformDist: resolve(cwd, '.data', name, transformDist),
    transformFilter: transformIgnore
      ? RegExp(`^(?!(${transformIgnore.join('|')})).*.md$`)
      : RegExp('.*.md$'),
  };
};
