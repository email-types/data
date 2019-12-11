import { EmailClient } from './types';

export const googleInbox: EmailClient = {
  name: 'Google Inbox',
  platforms: [
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
