import { resolve } from 'path';

export type ProviderName = 'caniemail';

export type ProviderConfig = {
  dataUrl: string;
  dataDist: string;
  transformDist: string;
  transformIgnore?: string[];
};

export type ProviderTransformer<
  T extends object = any,
  U extends object = any
> = (data: T) => Promise<U>;

export type ProviderValidator<T extends object = any> = (
  data: T,
) => Record<'warnings', string[]>;

export type Provider = Omit<ProviderConfig, 'transformIgnore'> & {
  name: ProviderName;
  transformFilter: RegExp;
  transform: () => Promise<ProviderTransformer>;
  validate: () => Promise<ProviderValidator>;
};

type Options = {
  cwd?: string;
  download?: boolean;
};

export const getProvider = async (
  name: ProviderName,
  opts: Options,
): Promise<Provider> => {
  const { config } = await import(`../providers/${name}/config`);
  const { dataUrl, dataDist, transformDist, transformIgnore = [] } = config;
  const { cwd = process.cwd() } = opts;

  return {
    name,
    dataUrl,
    dataDist: resolve(cwd, '.data', name, dataDist),
    transformDist: resolve(cwd, '.data', name, transformDist),
    transformFilter: transformIgnore
      ? RegExp(`^(?!(${transformIgnore.join('|')})).*.md$`)
      : RegExp('.*.md$'),
    transform: async (): Promise<ProviderTransformer> =>
      import(`../providers/${name}/transform`).then((p) => p.transform),
    validate: async (): Promise<ProviderValidator> =>
      import(`../providers/${name}/validate`).then((p) => p.validate),
  };
};
