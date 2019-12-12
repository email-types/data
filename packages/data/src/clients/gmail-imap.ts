import { Client } from '../general/client.types';

export const gmailImap: Client = {
  name: 'Gmail IMAP',
  developer: 'Google',
  protocols: [],
  platforms: [
    {
      name: 'Gmail IMAP for Android',
      description: '',
      kind: 'App.Android.Mobile',
      engine: 'Blink',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
  ],
};
