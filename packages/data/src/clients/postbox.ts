import { Product } from './types';

export const postbox: Product = {
  name: 'Postbox',
  clients: [
    {
      name: 'Postbox for macOS',
      description: 'A popular commercial email client for macOS.',
      kind: 'Mac App',
      engine: 'Gecko',
    },
    {
      name: 'Postbox for Windows',
      description: 'A popular commercial email client for Windows.',
      kind: 'Windows App',
      engine: 'Gecko',
    },
  ],
};
