import { Link } from './misc';

export type Doctype = {
  description?: string;
  element: 'html' | 'HTML';
  keyword: 'PUBLIC' | 'SYSTEM' | null;
  publicIdentifier: string | null;
  systemIdentifier: string | null;
  links?: Link[];
};

export type Doctypes = Record<string, Doctype>;
