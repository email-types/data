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
      doctype: 'Unknown',
    },
    {
      name: 'Gmail for iOS',
      description: '',
      kind: 'iOS App',
      engine: 'WebKit',
      doctype: 'Unknown',
    },
    {
      name: 'Gmail for iPadOS',
      description: '',
      kind: 'iPad App',
      engine: 'WebKit',
      doctype: 'Unknown',
    },
    {
      name: 'Gmail for Android',
      description: '',
      kind: 'Android App',
      engine: 'Blink',
      doctype: 'Unknown',
    },
  ],
};
