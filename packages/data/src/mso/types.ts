import * as MSO from '../types/mso';

export const cssDataTypes: MSO.CssDataType[] = [
  {
    name: 'integer',
    syntax: '<number>',
    description:
      'The `<integer>` CSS data type is a special type of `<number>` that represents a whole number, whether positive or negative.',
    links: [
      {
        title: 'MDN',
        url: 'https://developer.mozilla.org/docs/Web/CSS/integer',
      },
    ],
  },
  {
    name: 'length',
    syntax: '<string> | <number>',
    description: 'The `<length>` CSS data type represents a distance value.',
    links: [
      {
        title: 'MDN',
        url: 'https://developer.mozilla.org/docs/Web/CSS/length',
      },
    ],
  },
  {
    name: 'number',
    syntax: '<number>',
    description:
      'The `<number>` CSS data type represents a number, being either an integer or a number with a fractional component.',
    links: [
      {
        title: 'MDN',
        url: 'https://developer.mozilla.org/docs/Web/CSS/number',
      },
    ],
  },
  {
    name: 'percentage',
    syntax: '<string>',
    description:
      "The `<percentage>` CSS data type represents a percentage value. It is often used to define a size as relative to an element's parent object.",
    links: [
      {
        title: 'MDN',
        url: 'https://developer.mozilla.org/docs/Web/CSS/percentage',
      },
    ],
  },
  {
    name: 'string',
    syntax: '<string>',
    description:
      'The `<string>` CSS data type represents a sequence of characters.',
    links: [
      {
        title: 'MDN',
        url: 'https://developer.mozilla.org/docs/Web/CSS/string',
      },
    ],
  },
  {
    name: 'url',
    syntax: '<string>',
    description:
      'The `<url>` CSS data type denotes a pointer to a resource, such as an image or a font.',
    links: [
      {
        title: 'MDN',
        url: 'https://developer.mozilla.org/docs/Web/CSS/url',
      },
    ],
  },
];

export default cssDataTypes;
