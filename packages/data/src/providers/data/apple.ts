import { Provider } from '../types';

export const apple: Provider[] = [
  {
    name: 'Apple Mail for macOS',
    abbr: 'AppleMail',
    description: 'Apple’s default email client bundled with OS X and macOS.',
    developer: 'Apple',
    client: 'Apple Mail',
    type: 'Application',
    platforms: ['Desktop'],
    os: 'macOS',
    engine: 'WebKit',
    links: [],
    versions: [
      '10.4',
      '10.5',
      '10.6',
      '10.7',
      '10.8',
      '10.9',
      '10.10',
      '10.11',
    ],
  },
  {
    name: 'Apple Mail for iOS',
    abbr: 'AppleMail.iOS',
    description: "Apple's default email client on iOS devices",
    developer: 'Apple',
    client: 'Apple Mail',
    type: 'Application',
    platforms: ['Mobile', 'Tablet'],
    os: 'iOS',
    engine: 'WebKit',
    links: [],
    versions: ['10', '11', '12'],
  },
  {
    name: 'Apple Mail for watchOS',
    abbr: 'AppleMail.watchOS',
    description: "Apple's default email client on watchOS devices",
    developer: 'Apple',
    client: 'Apple Mail',
    type: 'Application',
    platforms: ['Watch'],
    os: 'watchOS',
    engine: 'WebKit',
    links: [],
    versions: [],
  },
  {
    name: 'iCloud Webmail',
    abbr: 'iCloud',
    description:
      "Apple's cloud storage and cloud computing service accessed through a web browser",
    developer: 'Apple',
    client: 'iCloud',
    type: 'Webmail',
    platforms: ['Desktop', 'Mobile', 'Tablet'],
    os: 'Universal',
    engine: 'Contextual',
    links: [],
    versions: [],
  },
  {
    name: 'iCloud Mail for Windows',
    abbr: 'iCloud.Win',
    description:
      "Apple's cloud storage and cloud computing service for Windows",
    developer: 'Apple',
    client: 'iCloud',
    type: 'Application',
    platforms: ['Desktop'],
    os: 'Windows',
    engine: 'WebKit',
    links: [],
    versions: [],
  },
];
