import { Client } from '../general/client.types';

export const aolMail: Client = {
  name: 'Aol Mail',
  developer: 'Verizon',
  protocols: ['POP3', 'IMAP4', 'SMPT', 'SSL'],
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
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'AOL Mail for Windows',
      description: "AOL's built in email client for Windows.",
      kind: 'App.Windows',
      engine: 'Trident',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'AOL Mail for macOS',
      description: "AOL's built in email client for macOS.",
      kind: 'App.Mac',
      engine: 'WebKit',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'AOL Mail for Android',
      description: "AOL's email app for Android devices.",
      kind: 'App.Android',
      engine: 'Blink',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'AOL Mail for iOS',
      description: "AOL's email app for iOS devices.",
      kind: 'App.iOS',
      engine: 'WebKit',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'AOL Mail for iPadOS',
      description: "AOL's email app for iPadOS devices.",
      kind: 'App.iPad',
      engine: 'WebKit',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'AOL Mail for watchOS',
      description: "AOL's email app for watchOS devices.",
      kind: 'App.iWatch',
      engine: 'WebKit',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
  ],
};
