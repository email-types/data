import { Webmail } from './webmail.types';

export const webmail: Webmail[] = [
  {
    name: 'Webmail',
    kind: 'Webmail',
    devices: ['Desktop', 'Mobile', 'Tablet'],
    os: 'Universal',
  },
  {
    name: 'Webmail.Desktop',
    kind: 'Webmail',
    devices: ['Desktop'],
    os: 'Universal',
  },
  {
    name: 'Webmail.Mobile',
    kind: 'Webmail',
    devices: ['Mobile'],
    os: 'Universal',
  },
  {
    name: 'Webmail.Tablet',
    kind: 'Webmail',
    devices: ['Tablet'],
    os: 'Universal',
  },
];
