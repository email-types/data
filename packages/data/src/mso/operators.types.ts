import { Link } from '../types/common';

export type Operator = {
  syntax: string;
  description?: string;
  links?: Readonly<Link>[];
};

export type Operators = Record<string, Operator>;
