import { Product } from './types';

export const icloud: Product = {
  name: 'iCloud',
  links: [],
  clients: [
    {
      name: 'iCloud Webmail',
      description:
        "Apple's cloud storage and cloud computing service accessed through a web browser",
      kind: 'Webmail',
      platforms: ['Desktop', 'Mobile', 'Tablet'],
      os: 'Universal',
      engine: 'Contextual',
    },
    {
      name: 'iCloud Mail for Windows',
      description:
        "Apple's cloud storage and cloud computing service for Windows",
      kind: 'Application',
      platforms: ['Desktop'],
      os: 'Windows',
      engine: 'WebKit',
    },
  ],
};
