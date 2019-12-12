import { Links, Description } from '../common';

export type DataType = {
  syntax: string;
  description?: Description;
  links?: Links;
};

export type DataTypes = Record<string, DataType>;
