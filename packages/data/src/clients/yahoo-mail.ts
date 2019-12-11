import { EmailClient } from './types';

export const yahooMail: EmailClient = {
  name: 'Yahoo Mail',
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
      devices: ['Mobile', 'Tablet'],
      os: 'Android',
      engine: 'Gecko',
    },
    {
      kind: 'Application',
      devices: ['Mobile'],
      os: 'iOS',
      engine: 'WebKit',
    },
    {
      kind: 'Application',
      devices: ['Tablet'],
      os: 'iPadOS',
      engine: 'WebKit',
    },
  ],
};
