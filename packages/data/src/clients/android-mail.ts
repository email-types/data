import { Client } from '../general/client.types';

export const androidMail: Client = {
  name: 'Android Mail',
  developer: 'Google',
  protocols: [],
  platforms: [
    {
      name: 'Android Mail',
      description: '',
      kind: 'App.Android.Mobile',
      engine: 'Blink',
      doctype: {
        preset: 'Unsure',
        supports: 'Unsure',
      },
    },
  ],
};
