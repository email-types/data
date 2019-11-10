import { Provider } from '../types';

export const aol: Provider[] = [
  {
    name: 'AOL Webmail',
    abbr: 'AOL',
    description:
      "AOL's webmail service, which can be accessed through a web browser.",
    developer: 'Verizon',
    client: 'Aol Mail',
    type: 'Webmail',
    platforms: ['Desktop', 'Mobile', 'Tablet'],
    os: 'Universal',
    engine: 'Contextual',
    prefix: 'Contextual',
    links: [
      { title: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/AOL_Mail' },
    ],
    versions: [],
  },
  {
    name: 'AOL Mail for Windows',
    abbr: 'AOL.Win',
    description: "AOL's built in email client for Windows.",
    developer: 'Verizon',
    client: 'Aol Mail',
    type: 'Application',
    platforms: ['Desktop'],
    os: 'Windows',
    engine: 'Trident',
    prefix: 'Ms',
    links: [
      { title: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/AOL_Mail' },
    ],
    versions: [],
  },
  {
    name: 'AOL Mail for macOS',
    abbr: 'AOL.macOS',
    description: "AOL's built in email client for macOS.",
    developer: 'Verizon',
    client: 'Aol Mail',
    type: 'Application',
    platforms: ['Desktop'],
    os: 'macOS',
    engine: 'WebKit',
    prefix: 'WebKit',
    links: [
      { title: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/AOL_Mail' },
    ],
    versions: [],
  },
  {
    name: 'AOL Mail for Android',
    abbr: 'AOL.And',
    description: "AOL's email app for Android devices.",
    developer: 'Verizon',
    client: 'Aol Mail',
    type: 'Application',
    platforms: ['Mobile', 'Tablet'],
    os: 'Android',
    engine: 'Gecko',
    prefix: 'WebKit',
    links: [
      { title: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/AOL_Mail' },
    ],
    versions: [],
  },
  {
    name: 'AOL Mail for iOS',
    abbr: 'AOL.iOS',
    description: "AOL's email app for iOS devices.",
    developer: 'Verizon',
    client: 'Aol Mail',
    type: 'Application',
    platforms: ['Mobile', 'Tablet'],
    os: 'iOS',
    engine: 'WebKit',
    prefix: 'WebKit',
    links: [
      { title: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/AOL_Mail' },
    ],
    versions: [],
  },
  {
    name: 'AOL Mail for iPadOS',
    abbr: 'AOL.iPadOS',
    description: "AOL's email app for iPadOS devices.",
    developer: 'Verizon',
    client: 'Aol Mail',
    type: 'Application',
    platforms: ['Tablet'],
    os: 'iPadOS',
    engine: 'WebKit',
    prefix: 'WebKit',
    links: [
      { title: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/AOL_Mail' },
    ],
    versions: [],
  },
  {
    name: 'AOL Mail for watchOS',
    abbr: 'AOL.watchOS',
    description: "AOL's email app for watchOS devices.",
    developer: 'Verizon',
    client: 'Aol Mail',
    type: 'Application',
    platforms: ['Watch'],
    os: 'watchOS',
    engine: 'WebKit',
    prefix: 'WebKit',
    links: [
      { title: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/AOL_Mail' },
    ],
    versions: [],
  },
];
