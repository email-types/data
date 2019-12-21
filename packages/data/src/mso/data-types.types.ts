import { Links, Description } from '../common.types';

export type DataType = {
  syntax: string;
  description?: Description;
  links?: Links;
};

export type DataTypes = Record<string, DataType>;
