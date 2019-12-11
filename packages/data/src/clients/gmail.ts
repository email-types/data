import { Product } from './types';

export const gmail: Product = {
  name: 'Gmail',
  links: [],
  clients: [
    {
      name: 'Gmail for Desktop, Mobile, and Tablet Webmail',
      description: '',
      kind: 'Webmail',
      platforms: ['Desktop', 'Mobile', 'Tablet'],
      os: 'Universal',
      engine: 'Contextual',
    },
    {
      name: 'Gmail for iOS',
      description: '',
      kind: 'Application',
      platforms: ['Mobile'],
      os: 'iOS',
      engine: 'WebKit',
    },
    {
      name: 'Gmail for iPadOS',
      description: '',
      kind: 'Application',
      platforms: ['Tablet'],
      os: 'iPadOS',
      engine: 'WebKit',
    },
    {
      name: 'Gmail for Android',
      description: '',
      kind: 'Application',
      platforms: ['Mobile', 'Tablet'],
      os: 'Android',
      engine: 'Blink',
    },
  ],
};
