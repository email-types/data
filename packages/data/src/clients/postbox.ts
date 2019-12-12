import { Client } from '../general/client.types';

export const postbox: Client = {
  name: 'Postbox',
  developer: 'Postbox',
  protocols: [],
  platforms: [
    {
      name: 'Postbox for macOS',
      description: 'A popular commercial email client for macOS.',
      kind: 'App.Mac',
      engine: 'Gecko',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Postbox for Windows',
      description: 'A popular commercial email client for Windows.',
      kind: 'App.Windows',
      engine: 'Gecko',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
  ],
};
