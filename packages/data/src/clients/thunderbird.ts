import { Product } from './types';

export const thunderbird: Product = {
  name: 'Thunderbird',
  links: [],
  clients: [
    {
      name: 'Thunderbird for macOS',
      description: '',
      kind: 'Application',
      platforms: ['Desktop'],
      os: 'macOS',
      engine: 'Gecko',
    },
    {
      name: 'Thunderbird for Windows',
      description: '',
      kind: 'Application',
      platforms: ['Desktop'],
      os: 'Windows',
      engine: 'Gecko',
    },
    {
      name: 'Thunderbird for Linux',
      description: '',
      kind: 'Application',
      platforms: ['Desktop'],
      os: 'Linux',
      engine: 'Gecko',
    },
  ],
};
