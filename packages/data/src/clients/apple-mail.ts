import { EmailClient } from './types';

export const appleMail: EmailClient = {
  name: 'Apple Mail',
  description: '',
  links: [],
  platforms: [
    {
      kind: 'Application',
      devices: ['Desktop'],
      os: 'macOS',
      engine: 'WebKit',
    },
    {
      kind: 'Application',
      devices: ['Tablet'],
      os: 'iOS',
      engine: 'WebKit',
    },
    {
      kind: 'Application',
      devices: ['Tablet'],
      os: 'iPadOS',
      engine: 'WebKit',
    },
    {
      kind: 'Application',
      devices: ['Watch'],
      os: 'watchOS',
      engine: 'WebKit',
    },
  ],
};
