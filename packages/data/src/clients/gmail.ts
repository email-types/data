import { Client } from '../general/client.types';

export const gmail: Client = {
  name: 'Gmail',
  developer: 'Google',
  protocols: [],
  platforms: [
    {
      name: 'Gmail for Desktop, Mobile, and Tablet Webmail',
      description: '',
      kind: 'Webmail',
      engine: 'Contextual',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Gmail for iOS',
      description: '',
      kind: 'iOS App',
      engine: 'WebKit',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Gmail for iPadOS',
      description: '',
      kind: 'iPad App',
      engine: 'WebKit',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Gmail for Android',
      description: '',
      kind: 'Android App',
      engine: 'Blink',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
  ],
};
