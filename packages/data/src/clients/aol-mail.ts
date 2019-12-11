import { Product } from './types';

export const aolMail: Product = {
  name: 'Aol Mail',
  links: [
    { title: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/AOL_Mail' },
  ],
  clients: [
    {
      name: 'AOL Webmail',
      description:
        "AOL's webmail service, which can be accessed through a web browser.",
      kind: 'Webmail',
      platforms: ['Desktop', 'Mobile', 'Tablet'],
      os: 'Universal',
      engine: 'Blink',
    },
    {
      name: 'AOL Mail for Windows',
      description: "AOL's built in email client for Windows.",
      kind: 'Application',
      platforms: ['Desktop'],
      os: 'Windows',
      engine: 'Trident',
    },
    {
      name: 'AOL Mail for macOS',
      description: "AOL's built in email client for macOS.",
      kind: 'Application',
      platforms: ['Desktop'],
      os: 'macOS',
      engine: 'WebKit',
    },
    {
      name: 'AOL Mail for Android',
      description: "AOL's email app for Android devices.",
      kind: 'Application',
      platforms: ['Mobile', 'Tablet'],
      os: 'Android',
      engine: 'Blink',
    },
    {
      name: 'AOL Mail for iOS',
      description: "AOL's email app for iOS devices.",
      kind: 'Application',
      platforms: ['Mobile'],
      os: 'iOS',
      engine: 'WebKit',
    },
    {
      name: 'AOL Mail for iPadOS',
      description: "AOL's email app for iPadOS devices.",
      kind: 'Application',
      platforms: ['Tablet'],
      os: 'iPadOS',
      engine: 'WebKit',
    },
    {
      name: 'AOL Mail for watchOS',
      description: "AOL's email app for watchOS devices.",
      kind: 'Application',
      platforms: ['Watch'],
      os: 'watchOS',
      engine: 'WebKit',
    },
  ],
};
