import { Link } from './misc';

export type Property = {
  syntax: string;
  description?: string;
  initial: string | number | null;
  inherited: boolean;
  shorthand: boolean;
  features: string[];
};

export type Properties = Record<string, Readonly<Property>>;

export interface Syntax {
  syntax: string;
}

export type Syntaxes = Record<string, Readonly<Syntax>>;

export interface Feature {
  title: string;
  url: string;
}

export type Features = Record<string, Readonly<Feature>>;

export type CssDataTypes = Record<string, { links: Readonly<Link>[] }>;

export interface Operator {
  syntax: string;
  description: string;
  links?: Link[];
}

export type Operators = Record<string, Readonly<Operator>>;

export interface Version {
  syntax: string;
  /* Valid Outlook versions */
  versions: string[];
}

export type Versions = Record<string, Readonly<Version>>;
