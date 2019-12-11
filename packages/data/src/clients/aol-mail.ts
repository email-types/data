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
      engine: 'Blink',
    },
    {
      name: 'AOL Mail for Windows',
      description: "AOL's built in email client for Windows.",
      kind: 'Windows App',
      engine: 'Trident',
    },
    {
      name: 'AOL Mail for macOS',
      description: "AOL's built in email client for macOS.",
      kind: 'Mac App',
      engine: 'WebKit',
    },
    {
      name: 'AOL Mail for Android',
      description: "AOL's email app for Android devices.",
      kind: 'Android App',
      engine: 'Blink',
    },
    {
      name: 'AOL Mail for iOS',
      description: "AOL's email app for iOS devices.",
      kind: 'iOS App',
      engine: 'WebKit',
    },
    {
      name: 'AOL Mail for iPadOS',
      description: "AOL's email app for iPadOS devices.",
      kind: 'iPad App',
      engine: 'WebKit',
    },
    {
      name: 'AOL Mail for watchOS',
      description: "AOL's email app for watchOS devices.",
      kind: 'iWatch App',
      engine: 'WebKit',
    },
  ],
};
