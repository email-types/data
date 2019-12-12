import { Client } from '../general/client.types';

export const googleInbox: Client = {
  name: 'Google Inbox',
  developer: 'Google',
  protocols: [],
  platforms: [
    {
      name: 'Google Inbox for Desktop, Mobile, and Tablet Webmail',
      description: '',
      kind: 'Webmail',
      engine: 'Contextual',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Google Inbox for iOS',
      description: '',
      kind: 'iOS App',
      engine: 'WebKit',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Google Inbox for iPadOS',
      description: '',
      kind: 'iPad App',
      engine: 'WebKit',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Google Inbox for Android',
      description: '',
      kind: 'Android App',
      engine: 'Blink',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
  ],
};
