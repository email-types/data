import { EmailClient } from './types';

export const thunderbird: EmailClient = {
  name: 'Thunderbird',
  description: '',
  links: [],
  platforms: [
    {
      kind: 'Application',
      devices: ['Desktop'],
      os: 'macOS',
      engine: 'Gecko',
    },
    {
      kind: 'Application',
      devices: ['Desktop'],
      os: 'Windows',
      engine: 'Gecko',
    },
    {
      kind: 'Application',
      devices: ['Desktop'],
      os: 'Linux',
      engine: 'Gecko',
    },
  ],
};
