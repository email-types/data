import { Client } from '../general/client.types';

export const icloud: Client = {
  name: 'iCloud',
  developer: 'Apple',
  protocols: [],
  platforms: [
    {
      name: 'iCloud Webmail',
      description:
        "Apple's cloud storage and cloud computing service accessed through a web browser",
      kind: 'Webmail',
      engine: 'Contextual',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'iCloud Mail for Windows',
      description:
        "Apple's cloud storage and cloud computing service for Windows",
      kind: 'App.Windows',
      engine: 'WebKit',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
  ],
};
