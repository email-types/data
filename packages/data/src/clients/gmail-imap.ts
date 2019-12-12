import { Client } from '../general/client.types';

export const gmailImap: Client = {
  name: 'Gmail IMAP',
  developer: 'Google',
  protocols: [],
  platforms: [
    {
      name: 'Gmail IMAP for Android',
      description: '',
      kind: 'Android Mobile App',
      engine: 'Blink',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
  ],
};
