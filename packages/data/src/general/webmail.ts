import { Webmail } from './webmail.types';

export const webmail: Webmail[] = [
  {
    name: 'Webmail',
    kind: 'Webmail',
    devices: ['Desktop', 'Mobile', 'Tablet'],
    os: 'Universal',
  },
  {
    name: 'Desktop Webmail',
    kind: 'Webmail',
    devices: ['Desktop'],
    os: 'Universal',
  },
  {
    name: 'Mobile Webmail',
    kind: 'Webmail',
    devices: ['Mobile'],
    os: 'Universal',
  },
  {
    name: 'Tablet Webmail',
    kind: 'Webmail',
    devices: ['Tablet'],
    os: 'Universal',
  },
];
