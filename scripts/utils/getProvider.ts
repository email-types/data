import { ProviderName, ProviderConfig, ProviderTransformer } from './types';

type Provider = {
  config: () => Promise<ProviderConfig>;
  transform: () => Promise<ProviderTransformer>;
};

export const getProvider = (provider: ProviderName): Provider => {
  const imports = {
    config: async (): Promise<ProviderConfig> =>
      import(`../providers/${provider}/config`).then((p) => p.config),
    transform: async (): Promise<ProviderTransformer> =>
      import(`../providers/${provider}/transform`).then((p) => p.transform),
  };

  return imports;
};
