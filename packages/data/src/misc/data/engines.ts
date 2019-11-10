import { Engine } from '../types';

export const engines: Engine[] = [
  {
    name: 'Blink',
    description:
      'Used in Google Chrome web browsers and part of the Chromium project.',
    developer: 'Google',
    prefix: 'WebKit',
  },
  {
    name: 'Gecko',
    description:
      'Used in the Firefox browser and the Thunderbird email client.',
    developer: 'Mozilla',
    prefix: 'Moz',
  },
  {
    name: 'MsWord',
    description: 'Yes. Microsoft Word.',
    developer: 'Microsoft',
    prefix: 'Mso',
  },
  {
    name: 'Presto',
    description:
      'Depricated engine used in the Opera 7 thru Opera 14 web browers.',
    developer: 'Opera',
    prefix: 'O',
  },
  {
    name: 'Trident',
    description: 'Used for Microsoft Windows version of Internet Explorer.',
    developer: 'Microsoft',
    prefix: 'WebKit',
  },
  {
    name: 'WebKit',
    description:
      'Used in the Safari web browser and all of the iOS web browsers.',
    developer: 'Apple',
    prefix: 'WebKit',
  },
  {
    name: 'Contextual',
    description:
      'The rendering engine is contextual to the brower being used when viewing Webmail.',
    prefix: 'Contextual',
  },
];
