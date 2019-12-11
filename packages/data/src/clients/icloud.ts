import { EmailClient } from './types';

export const icloud: EmailClient = {
  name: 'iCloud',
  description: '',
  links: [],
  platforms: [
    {
      kind: 'Webmail',
      devices: ['Desktop', 'Mobile', 'Tablet'],
      os: 'Universal',
      engine: 'Contextual',
    },
    {
      kind: 'Application',
      devices: ['Desktop'],
      os: 'Windows',
      engine: 'WebKit',
    },
  ],
};
