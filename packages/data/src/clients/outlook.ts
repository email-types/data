import { Client } from '../general/client.types';

export const outlook: Client = {
  name: 'Outlook',
  developer: 'Microsoft',
  protocols: [],
  platforms: [
    {
      name: 'Outlook 2000-2003',
      description:
        "Outlook email client that is part of Microsoft's Office suites of the same years. Emails are displayed using the rendering engine from Internet Explorer.",
      kind: 'App.Windows',
      engine: 'Trident',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Outlook 2007-Current',
      description:
        "Outlook email client that is part of Microsoft's Office suites of the same years. Emails are displayed using the rendering engine from Microsoft Word.",
      kind: 'App.Windows',
      engine: 'MsWord',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Outlook for Mac',
      description:
        "Outlook email client that is of Microsoft's office suite for OS X and macOS.",
      kind: 'App.Mac',
      engine: 'WebKit',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Outlook for Android',
      description: "Microsoft's email app for Android platforms",
      kind: 'App.Android',
      engine: 'Blink',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Outlook for iOS',
      description: "Microsoft's email app for iOS platforms",
      kind: 'App.iOS',
      engine: 'WebKit',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Outlook for iPadOS',
      description: "Microsoft's email app for iPadOS platforms",
      kind: 'App.iPad',
      engine: 'WebKit',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Outlook.com',
      description:
        "Microsoft's webmail service, which can be accessed through a web browser. Outlook.com is a successor to Hotmail.",
      kind: 'Webmail',
      engine: 'Contextual',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
  ],
};
