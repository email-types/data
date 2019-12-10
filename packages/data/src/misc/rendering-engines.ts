import { RenderingEngines } from './rendering-engines.types';

export const renderingEngines: RenderingEngines = [
  {
    name: 'Blink',
    description:
      'Used in Google Chrome web browsers and part of the Chromium project.',
    prefix: 'WebKit',
  },
  {
    name: 'Gecko',
    description:
      'Used in the Firefox browser and the Thunderbird email client.',
    prefix: 'Moz',
  },
  {
    name: 'MsWord',
    description: 'Yes. Microsoft Word.',
    prefix: 'Mso',
  },
  {
    name: 'Trident',
    description: 'Used for Microsoft Windows version of Internet Explorer.',
    prefix: 'WebKit',
  },
  {
    name: 'WebKit',
    description:
      'Used in the Safari web browser and all of the iOS web browsers.',
    prefix: 'WebKit',
  },
  {
    name: 'Contextual',
    description:
      'The rendering engine is contextual to the brower being used when viewing Webmail.',
    prefix: ['Moz', 'Ms', 'WebKit'],
  },
];
