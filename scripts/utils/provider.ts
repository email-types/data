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

export type ProviderValidator<T extends object = any> = (data: T) => string[];

export type Provider = {
  name: ProviderName;
  config: () => Promise<ProviderConfig>;
  transform: () => Promise<ProviderTransformer>;
  validate: () => Promise<ProviderValidator>;
};

export const getProvider = (name: ProviderName): Provider => {
  return {
    name,
    config: async (): Promise<ProviderConfig> =>
      import(`../providers/${name}/config`).then((p) => p.config),
    transform: async (): Promise<ProviderTransformer> =>
      import(`../providers/${name}/transform`).then((p) => p.transform),
    validate: async (): Promise<ProviderValidator> =>
      import(`../providers/${name}/validate`).then((p) => p.validate),
  };
};
