import { Links, Description } from '../common.types';

export type Operator = {
  syntax: string;
  description?: Description;
  links?: Links;
};

export type Operators = Record<string, Operator>;
