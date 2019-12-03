import { Link } from './common';

export type Property = {
  syntax: string;
  description?: string;
  initial: string | number | null;
  inherited: boolean;
  shorthand: boolean;
  groups?: string[]; // Properties are organized into Groups (MSOGroups[])
};

export interface Syntax {
  syntax: string;
}

export interface Group {
  title: string;
  url: string;
}

export type CssDataType = {
  links: Readonly<Link>[];
};

export interface Operator {
  syntax: string;
  description: string;
  links?: Link[];
}

export interface Version {
  syntax: string;
  /* Valid Outlook versions */
  versions: string[];
}
