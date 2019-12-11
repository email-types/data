import { Developers } from './developers.types';

export const developers: Developers = [
  {
    name: 'Apple',
    clients: ['Apple Mail', 'iCloud'],
    engines: ['WebKit'],
    os: ['iOS', 'iPadOS', 'macOS', 'watchOS'],
  },
  {
    name: 'Google',
    clients: ['Android Mail', 'Gmail', 'Gmail IMAP', 'Google Inbox', 'G Suite'],
    engines: ['Blink'],
    os: ['Android'],
  },
  {
    name: 'IBM',
    clients: ['IBM Notes'],
    engines: null,
    os: null,
  },
  {
    name: 'Microsoft',
    clients: ['Outlook', 'Windows Mail'],
    engines: ['MsWord', 'Trident'],
    os: ['Windows'],
  },
  {
    name: 'Mozilla',
    clients: ['Thunderbird'],
    engines: ['Gecko'],
    os: null,
  },
  {
    name: 'Verizon',
    clients: ['Aol Mail', 'Yahoo Mail'],
    engines: null,
    os: null,
  },
  {
    name: 'Other',
    clients: ['Blackberry Mail', 'Samsung Mail', 'Postbox'],
    engines: ['Unknown'],
    os: ['Linux', 'Unknown'],
  },
];
