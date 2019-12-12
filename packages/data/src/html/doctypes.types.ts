import { Nullable, Description } from '../common';

type Name =
  | 'HTML 5'
  | 'HTML 4.01 Strict'
  | 'HTML 4.01 Transitional'
  | 'XHTML 1.1'
  | 'XHTML 1.0 Strict'
  | 'XHTML 1.0 Transitional';

type Element = 'html' | 'svg' | 'math';

type Keyword = 'public' | 'system';

export type Doctype = {
  name: Name;
  description?: Description;
  element: Element;
  keyword: Nullable<Keyword>;
  publicIdentifier: Nullable<string>;
  systemIdentifier: Nullable<string>;
};
