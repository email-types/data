import { Link } from '../common';

export type DataType = {
  syntax: string;
  description?: string;
  links?: Readonly<Link>[];
};

export type DataTypes = Record<string, DataType>;
