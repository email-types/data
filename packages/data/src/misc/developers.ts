import { scheme } from './developers.scheme';

export const developers: typeof scheme[] = [
  {
    name: 'Apple',
    description: '',
    clients: ['Apple Mail', 'iCloud'],
    engines: ['WebKit'],
    os: ['iOS', 'iPadOS', 'macOS', 'watchOS'],
  },
  {
    name: 'Google',
    description: '',
    clients: ['Android Mail', 'Gmail', 'Gmail IMAP', 'Google Inbox', 'G Suit'],
    engines: ['Blink'],
    os: ['Android'],
  },
  {
    name: 'IBM',
    description: '',
    clients: ['IBM Notes'],
    engines: null,
    os: null,
  },
  {
    name: 'Microsoft',
    description: '',
    clients: ['Outlook', 'Windows 10 Mail', 'Windows Phone 8 Mail'],
    engines: ['MsWord', 'Trident'],
    os: ['Windows'],
  },
  {
    name: 'Mozilla',
    description: '',
    clients: ['Thunderbird'],
    engines: ['Gecko'],
    os: null,
  },
  {
    name: 'Verizon',
    description: '',
    clients: ['Aol Mail', 'Yahoo Mail'],
    engines: null,
    os: null,
  },
  {
    name: 'Other',
    description: '',
    clients: ['Blackberry', 'Samsung Mail', 'Postbox'],
    engines: ['Unknown'],
    os: ['Linux', 'Unknown'],
  },
];
