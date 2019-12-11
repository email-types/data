import { Product } from './types';

export const googleInbox: Product = {
  name: 'Google Inbox',
  clients: [
    {
      name: 'Google Inbox for Desktop, Mobile, and Tablet Webmail',
      description: '',
      kind: 'Webmail',
      platforms: ['Desktop', 'Mobile', 'Tablet'],
      os: 'Universal',
      engine: 'Contextual',
    },
    {
      name: 'Google Inbox for iOS',
      description: '',
      kind: 'Application',
      platforms: ['Mobile'],
      os: 'iOS',
      engine: 'WebKit',
    },
    {
      name: 'Google Inbox for iPadOS',
      description: '',
      kind: 'Application',
      platforms: ['Tablet'],
      os: 'iPadOS',
      engine: 'WebKit',
    },
    {
      name: 'Google Inbox for Android',
      description: '',
      kind: 'Application',
      platforms: ['Mobile', 'Tablet'],
      os: 'Android',
      engine: 'Blink',
    },
  ],
};
