import { Link } from './common';
import { MSOGroups } from '../mso/groups';

export type Property = {
  syntax: string;
  description?: string;
  initial: string | number | null;
  inherited: boolean;
  shorthand: boolean;
  groups?: (keyof typeof MSOGroups)[];
};

export interface Syntax {
  syntax: string;
}

export type CssDataType = {
  name: string;
  syntax: string;
  description?: string;
  links?: Readonly<Link>[];
};

export interface Operator {
  syntax: string;
  description: string;
  links?: Readonly<Link>[];
}

export interface Version {
  syntax: string;
  /* Valid Outlook versions */
  versions: string[];
}
