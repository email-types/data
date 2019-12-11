import { RenderingEngine } from './rendering-engines.types';

export const renderingEngines: RenderingEngine[] = [
  {
    name: 'Blink',
    description:
      'Used in Google Chrome web browsers and part of the Chromium project.',
    developer: 'Google',
    prefix: 'WebKit',
  },
  {
    name: 'EdgeHTML',
    description:
      "A fork of Microsoft's Trident that was the engine of the Internet Explorer browser.",
    developer: 'Microsoft',
    prefix: 'Ms',
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
    name: 'Trident',
    description: 'Used for Microsoft Windows version of Internet Explorer.',
    developer: 'Microsoft',
    prefix: 'Ms',
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
      "The rendering engine is contextual to the broswer being used when viewing Webmail. The `mso` vendor prefix is not included as its only applies to Microsoft Office Outlook versions rendered using Microsoft Word's rendering engine.",
    developer: null,
    prefix: ['Moz', 'Ms', 'WebKit'],
  },
];
