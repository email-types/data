export type ProviderName = 'caniemail';

export type ProviderConfig = {
  dataUrl: string;
  dataDist: string;
  transformDist: string;
  transformIgnore?: string[];
};

export type ProviderTransformer = (filepath: string) => Promise<any>;

export type Config = {
  dataUrl: string;
  dataDist: string;
  transformDist: string;
  transformFilter: RegExp;
};
