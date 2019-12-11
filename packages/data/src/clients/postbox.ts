import { Product } from './types';

export const postbox: Product = {
  name: 'Postbox',
  clients: [
    {
      name: 'Postbox for macOS',
      description: 'A popular commercial email client for macOS.',
      kind: 'Application',
      platforms: ['Desktop'],
      os: 'macOS',
      engine: 'Gecko',
    },
    {
      name: 'Postbox for Windows',
      description: 'A popular commercial email client for Windows.',
      kind: 'Application',
      platforms: ['Desktop'],
      os: 'Windows',
      engine: 'Gecko',
    },
  ],
};
