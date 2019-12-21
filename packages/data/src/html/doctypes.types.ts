import { Nullable, Description } from '../common.types';

type Name =
  | 'HTML 5'
  | 'HTML 4.01 Strict'
  | 'HTML 4.01 Transitional'
  | 'XHTML 1.1'
  | 'XHTML 1.0 Strict'
  | 'XHTML 1.0 Transitional';

type Element = 'html' | 'HTML';

type Keyword = 'PUBLIC' | 'SYSTEM';

export type Doctype = {
  name: Name;
  description?: Description;
  element: Element;
  keyword: Nullable<Keyword>;
  publicIdentifier: Nullable<string>;
  systemIdentifier: Nullable<string>;
};
