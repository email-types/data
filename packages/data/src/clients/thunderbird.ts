import { Client } from '../general/client.types';

export const thunderbird: Client = {
  name: 'Thunderbird',
  developer: 'Mozilla',
  protocols: [],
  platforms: [
    {
      name: 'Thunderbird for macOS',
      description: '',
      kind: 'Mac App',
      engine: 'Gecko',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Thunderbird for Windows',
      description: '',
      kind: 'Windows App',
      engine: 'Gecko',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Thunderbird for Linux',
      description: '',
      kind: 'Linux App',
      engine: 'Gecko',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
  ],
};
