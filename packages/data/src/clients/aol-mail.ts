import { Client } from './types';

export const aolMail: Client = {
  name: 'Aol Mail',
  developer: 'Verizon',
  links: [
    { title: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/AOL_Mail' },
  ],
  platforms: [
    {
      name: 'AOL Webmail',
      description:
        "AOL's webmail service, which can be accessed through a web browser.",
      kind: 'Webmail',
      engine: 'Blink',
      doctype: 'Unknown',
    },
    {
      name: 'AOL Mail for Windows',
      description: "AOL's built in email client for Windows.",
      kind: 'Windows App',
      engine: 'Trident',
      doctype: 'Unknown',
    },
    {
      name: 'AOL Mail for macOS',
      description: "AOL's built in email client for macOS.",
      kind: 'Mac App',
      engine: 'WebKit',
      doctype: 'Unknown',
    },
    {
      name: 'AOL Mail for Android',
      description: "AOL's email app for Android devices.",
      kind: 'Android App',
      engine: 'Blink',
      doctype: 'Unknown',
    },
    {
      name: 'AOL Mail for iOS',
      description: "AOL's email app for iOS devices.",
      kind: 'iOS App',
      engine: 'WebKit',
      doctype: 'Unknown',
    },
    {
      name: 'AOL Mail for iPadOS',
      description: "AOL's email app for iPadOS devices.",
      kind: 'iPad App',
      engine: 'WebKit',
      doctype: 'Unknown',
    },
    {
      name: 'AOL Mail for watchOS',
      description: "AOL's email app for watchOS devices.",
      kind: 'iWatch App',
      engine: 'WebKit',
      doctype: 'Unknown',
    },
  ],
};
