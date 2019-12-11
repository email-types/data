import { EmailClient } from './types';

export const aolMail: EmailClient = {
  name: 'Aol Mail',
  description: '',
  links: [
    { title: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/AOL_Mail' },
  ],
  platforms: [
    {
      kind: 'Webmail',
      devices: ['Desktop', 'Mobile', 'Tablet'],
      os: 'Universal',
      engine: 'Blink',
    },
    {
      kind: 'Application',
      devices: ['Desktop'],
      os: 'Windows',
      engine: 'Trident',
    },
    {
      kind: 'Application',
      devices: ['Desktop'],
      os: 'macOS',
      engine: 'WebKit',
    },
    {
      kind: 'Application',
      devices: ['Mobile', 'Tablet'],
      os: 'Android',
      engine: 'Blink',
    },
    {
      kind: 'Application',
      devices: ['Mobile'],
      os: 'iOS',
      engine: 'WebKit',
    },
    {
      kind: 'Application',
      devices: ['Tablet'],
      os: 'iPadOS',
      engine: 'WebKit',
    },
    {
      kind: 'Application',
      devices: ['Watch'],
      os: 'watchOS',
      engine: 'WebKit',
    },
  ],
};
