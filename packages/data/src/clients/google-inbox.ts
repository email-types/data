import { Client } from './types';

export const googleInbox: Client = {
  name: 'Google Inbox',
  developer: 'Google',
  platforms: [
    {
      name: 'Google Inbox for Desktop, Mobile, and Tablet Webmail',
      description: '',
      kind: 'Webmail',
      engine: 'Contextual',
      doctype: 'Unknown',
    },
    {
      name: 'Google Inbox for iOS',
      description: '',
      kind: 'iOS App',
      engine: 'WebKit',
      doctype: 'Unknown',
    },
    {
      name: 'Google Inbox for iPadOS',
      description: '',
      kind: 'iPad App',
      engine: 'WebKit',
      doctype: 'Unknown',
    },
    {
      name: 'Google Inbox for Android',
      description: '',
      kind: 'Android App',
      engine: 'Blink',
      doctype: 'Unknown',
    },
  ],
};
