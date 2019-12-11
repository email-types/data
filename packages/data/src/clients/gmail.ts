import { EmailClient } from './types';

export const gmail: EmailClient = {
  name: 'Gmail',
  description: '',
  links: [],
  platforms: [
    {
      kind: 'Application',
      devices: ['Mobile'],
      os: 'Android',
      engine: 'WebKit',
    },
    {
      kind: 'Webmail',
      devices: ['Desktop', 'Mobile', 'Tablet'],
      os: 'Universal',
      engine: 'Contextual',
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
      devices: ['Mobile', 'Tablet'],
      os: 'Android',
      engine: 'Blink',
    },
  ],
};
