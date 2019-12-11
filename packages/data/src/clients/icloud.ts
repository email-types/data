import { Product } from './types';

export const icloud: Product = {
  name: 'iCloud',
  clients: [
    {
      name: 'iCloud Webmail',
      description:
        "Apple's cloud storage and cloud computing service accessed through a web browser",
      kind: 'Webmail',
      engine: 'Contextual',
    },
    {
      name: 'iCloud Mail for Windows',
      description:
        "Apple's cloud storage and cloud computing service for Windows",
      kind: 'Windows App',
      engine: 'WebKit',
    },
  ],
};
