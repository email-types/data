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
      kind: 'Windows App',
      engine: 'Trident',
      doctype: 'Unknown',
    },
    {
      name: 'Outlook 2007-Current',
      description:
        "Outlook email client that is part of Microsoft's Office suites of the same years. Emails are displayed using the rendering engine from Microsoft Word.",
      kind: 'Windows App',
      engine: 'MsWord',
      doctype: 'Unknown',
    },
    {
      name: 'Outlook for Mac',
      description:
        "Outlook email client that is of Microsoft's office suite for OS X and macOS.",
      kind: 'Mac App',
      engine: 'WebKit',
      doctype: 'Unknown',
    },
    {
      name: 'Outlook for Android',
      description: "Microsoft's email app for Android platforms",
      kind: 'Android App',
      engine: 'Blink',
      doctype: 'Unknown',
    },
    {
      name: 'Outlook for iOS',
      description: "Microsoft's email app for iOS platforms",
      kind: 'iOS App',
      engine: 'WebKit',
      doctype: 'Unknown',
    },
    {
      name: 'Outlook for iPadOS',
      description: "Microsoft's email app for iPadOS platforms",
      kind: 'iPad App',
      engine: 'WebKit',
      doctype: 'Unknown',
    },
    {
      name: 'Outlook.com',
      description:
        "Microsoft's webmail service, which can be accessed through a web browser. Outlook.com is a successor to Hotmail.",
      kind: 'Webmail',
      engine: 'Contextual',
      doctype: 'Unknown',
    },
  ],
};
