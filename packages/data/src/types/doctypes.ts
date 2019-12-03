import { Link } from './common';

export type Doctype = {
  description?: string;
  element: 'html' | 'HTML';
  keyword: 'PUBLIC' | 'SYSTEM' | null;
  publicIdentifier: string | null;
  systemIdentifier: string | null;
  links?: Link[];
};
