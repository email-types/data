import { Client } from '../general/client.types';

export const appleMail: Client = {
  name: 'Apple Mail',
  developer: 'Apple',
  protocols: [],
  links: [],
  platforms: [
    {
      name: 'Apple Mail for macOS',
      description: 'Apple’s default email client bundled with OS X and macOS.',
      kind: 'App.Mac',
      engine: 'WebKit',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Apple Mail for iOS',
      description: "Apple's default email client on iOS devices",
      kind: 'App.iOS',
      engine: 'WebKit',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Apple Mail for iPadOS',
      description: "Apple's default email client on iPadOS devices",
      kind: 'App.iPad',
      engine: 'WebKit',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Apple Mail for watchOS',
      description: "Apple's default email client on watchOS devices",
      kind: 'App.iWatch',
      engine: 'WebKit',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
  ],
};
