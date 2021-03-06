import { Doctype } from './doctypes.types';

export const doctypes: Doctype[] = [
  {
    name: 'HTML 5',
    description:
      'A doctype declaration which is very short, due to its lack of references to a Document Type Definition (DTD) in the form of a URL or FPI. All it contains is the tag name of the root element of the document, HTML.',
    element: 'html',
    keyword: null,
    publicIdentifier: null,
    systemIdentifier: null,
  },
  {
    name: 'HTML 4.01 Strict',
    description:
      'A strict doctype declaration which validates against the HTML 4.01 spec, although it doesn\'t allow any presentational markup or deprecated elements (such as `<font>` elements) or framesets to be used. It validates loose HTML style markup, such as minimized attributes and non-quoted attributes (eg required, rather than required="required")',
    element: 'HTML',
    keyword: 'PUBLIC',
    publicIdentifier: '-//W3C//DTD HTML 4.01//EN',
    systemIdentifier: 'http://www.w3.org/TR/html4/strict.dtd',
  },
  {
    name: 'HTML 4.01 Transitional',
    description:
      'A transitional doctype declaration which validates against the HTML 4.01 spec. It allows some presentational markup and deprecated elements (such as <font> elements) but not framesets. It validates loose HTML style markup, such as minimized attributes and non-quoted attributes (eg required, rather than required="required")',
    element: 'HTML',
    keyword: 'PUBLIC',
    publicIdentifier: '-//W3C//DTD HTML 4.01 Transitional//EN',
    systemIdentifier: 'http://www.w3.org/TR/html4/loose.dtd',
  },
  {
    name: 'XHTML 1.1',
    description: '',
    element: 'html',
    keyword: 'PUBLIC',
    publicIdentifier: '-//W3C//DTD XHTML 1.1//EN',
    systemIdentifier: 'http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd',
  },
  {
    name: 'XHTML 1.0 Strict',
    description:
      "A strict doctype declaration which validates against the HTML 4.01 spec, although it doesn't allow any presentational markup or deprecated elements (such as `<font>` elements) or framesets to be used. Unlike the `HTML 4.01 Strict` doctype, it does not validate loose HTML style markup.",
    element: 'html',
    keyword: 'PUBLIC',
    publicIdentifier: '-//W3C//DTD XHTML 1.0 Strict//EN',
    systemIdentifier: 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd',
  },
  {
    name: 'XHTML 1.0 Transitional',
    description:
      'A transitional doctype declaration which validates against the HTML 4.01 spec. It allows some presentational markup and deprecated elements (such as <font> elements) but not framesets. Unlike the `HTML 4.01 Transitional` doctype, it does not validate loose HTML style markup.',
    element: 'html',
    keyword: 'PUBLIC',
    publicIdentifier: '-//W3C//DTD XHTML 1.0 Transitional//EN',
    systemIdentifier: 'http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd',
  },
];
