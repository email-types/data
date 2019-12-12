import { Client } from '../general/client.types';

export const thunderbird: Client = {
  name: 'Thunderbird',
  developer: 'Mozilla',
  protocols: [],
  platforms: [
    {
      name: 'Thunderbird for macOS',
      description: '',
      kind: 'App.Mac',
      engine: 'Gecko',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Thunderbird for Windows',
      description: '',
      kind: 'App.Windows',
      engine: 'Gecko',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Thunderbird for Linux',
      description: '',
      kind: 'App.Linux',
      engine: 'Gecko',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
  ],
};
