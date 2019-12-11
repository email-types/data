import { EmailClient } from './types';

export const gSuite: EmailClient = {
  name: 'G Suite',
  platforms: [
    {
      kind: 'Webmail',
      devices: ['Desktop', 'Mobile', 'Tablet'],
      os: 'Universal',
      engine: 'Contextual',
    },
  ],
};
