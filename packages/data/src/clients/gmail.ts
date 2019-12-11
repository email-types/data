import { Product } from './types';

export const gmail: Product = {
  name: 'Gmail',
  clients: [
    {
      name: 'Gmail for Desktop, Mobile, and Tablet Webmail',
      description: '',
      kind: 'Webmail',
      engine: 'Contextual',
    },
    {
      name: 'Gmail for iOS',
      description: '',
      kind: 'iOS App',
      engine: 'WebKit',
    },
    {
      name: 'Gmail for iPadOS',
      description: '',
      kind: 'iPad App',
      engine: 'WebKit',
    },
    {
      name: 'Gmail for Android',
      description: '',
      kind: 'Android App',
      engine: 'Blink',
    },
  ],
};
