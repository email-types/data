import { Links, Description } from '../common';

export type Operator = {
  syntax: string;
  description?: Description;
  links?: Links;
};

export type Operators = Record<string, Operator>;
