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
      kind: 'App.iOS',
      engine: 'WebKit',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Google Inbox for iPadOS',
      description: '',
      kind: 'App.iPad',
      engine: 'WebKit',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Google Inbox for Android',
      description: '',
      kind: 'App.Android',
      engine: 'Blink',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
  ],
};
