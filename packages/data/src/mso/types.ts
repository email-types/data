import { create } from '../utils/create';
import * as MSO from '../types/mso';

const validate = create<MSO.CssDataType>();

export const cssDataTypes = validate({
  integer: {
    links: [
      {
        title: 'MDN',
        url: 'https://developer.mozilla.org/docs/Web/CSS/integer',
      },
    ],
  },
  length: {
    links: [
      {
        title: 'MDN',
        url: 'https://developer.mozilla.org/docs/Web/CSS/length',
      },
    ],
  },
  number: {
    links: [
      {
        title: 'MDN',
        url: 'https://developer.mozilla.org/docs/Web/CSS/number',
      },
    ],
  },
  percentage: {
    links: [
      {
        title: 'MDN',
        url: 'https://developer.mozilla.org/docs/Web/CSS/percentage',
      },
    ],
  },
  string: {
    links: [
      {
        title: 'MDN',
        url: 'https://developer.mozilla.org/docs/Web/CSS/string',
      },
    ],
  },
  url: {
    links: [
      {
        title: 'MDN',
        url: 'https://developer.mozilla.org/docs/Web/CSS/url',
      },
    ],
  },
});

export default cssDataTypes;
