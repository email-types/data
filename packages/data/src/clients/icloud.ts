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
      doctype: 'Unknown',
    },
    {
      name: 'iCloud Mail for Windows',
      description:
        "Apple's cloud storage and cloud computing service for Windows",
      kind: 'Windows App',
      engine: 'WebKit',
      doctype: 'Unknown',
    },
  ],
};
