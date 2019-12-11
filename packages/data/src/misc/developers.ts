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
    clients: ['Android Mail', 'Gmail', 'Google Inbox', 'G Suite'],
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
    clients: [
      'Outlook',
      'Outlook Express',
      'Windows 10 Mail',
      'Windows Phone 8 Mail',
    ],
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
    clients: ['Blackberry', 'Samsung Mail', 'Postbox'],
    engines: ['Unknown'],
    os: ['Linux', 'Unknown'],
  },
];
