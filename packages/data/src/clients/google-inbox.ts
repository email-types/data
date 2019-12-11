import { Product } from './types';

export const googleInbox: Product = {
  name: 'Google Inbox',
  clients: [
    {
      name: 'Google Inbox for Desktop, Mobile, and Tablet Webmail',
      description: '',
      kind: 'Webmail',
      engine: 'Contextual',
    },
    {
      name: 'Google Inbox for iOS',
      description: '',
      kind: 'iOS App',
      engine: 'WebKit',
    },
    {
      name: 'Google Inbox for iPadOS',
      description: '',
      kind: 'iPad App',
      engine: 'WebKit',
    },
    {
      name: 'Google Inbox for Android',
      description: '',
      kind: 'Android App',
      engine: 'Blink',
    },
  ],
};
