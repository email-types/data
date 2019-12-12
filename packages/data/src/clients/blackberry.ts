import { Client } from '../general/client.types';

export const blackberry: Client = {
  name: 'Blackberry Mail',
  developer: 'ITC',
  protocols: [],
  platforms: [
    {
      name: 'Blackberry Mail',
      description: "BlackBerry's default email client.",
      kind: 'App.Mobile',
      engine: 'Unsure',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
  ],
};
