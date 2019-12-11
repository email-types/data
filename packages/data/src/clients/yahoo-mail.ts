import { Product } from './types';

export const yahooMail: Product = {
  name: 'Yahoo Mail',
  links: [],
  clients: [
    {
      name: 'Yahoo! Mail',
      description:
        "Yahoo!'s webmail service, which can be accessed through a web browser.",
      kind: 'Webmail',
      platforms: ['Desktop', 'Mobile', 'Tablet'],
      os: 'Universal',
      engine: 'Contextual',
    },
    {
      name: 'Yahoo! Mail for Android',
      description: "Yahoo!'s email app for Android devices.",
      kind: 'Application',
      platforms: ['Mobile', 'Tablet'],
      os: 'Android',
      engine: 'Gecko',
    },
    {
      name: 'Yahoo! Mail for iOS',
      description: "Yahoo!'s email app for iOS devices.",
      kind: 'Application',
      platforms: ['Mobile'],
      os: 'iOS',
      engine: 'WebKit',
    },
    {
      name: 'Yahoo! Mail for iPadOS',
      description: "Yahoo!'s email app for iPadOS devices.",
      kind: 'Application',
      platforms: ['Tablet'],
      os: 'iPadOS',
      engine: 'WebKit',
    },
  ],
};
