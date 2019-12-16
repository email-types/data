import { resolve } from 'path';
import { Provider } from './provider';

export type Config = {
  dataUrl: string;
  dataDist: string;
  transformDist: string;
  transformFilter: RegExp;
};

type Options = {
  cwd?: string;
  download?: boolean;
};

export const getConfig = async (
  provider: Provider,
  opts: Options,
): Promise<Config> => {
  const { cwd = process.cwd() } = opts;

  const {
    dataUrl,
    dataDist,
    transformDist,
    transformIgnore = [],
  } = await provider.config();

  return {
    dataUrl,
    dataDist: resolve(cwd, '.data', provider.name, dataDist),
    transformDist: resolve(cwd, '.data', provider.name, transformDist),
    transformFilter: transformIgnore
      ? RegExp(`^(?!(${transformIgnore.join('|')})).*.md$`)
      : RegExp('.*.md$'),
  };
};
