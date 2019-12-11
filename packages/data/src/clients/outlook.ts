import { Product } from './types';

export const outlook: Product = {
  name: 'Outlook',
  clients: [
    {
      name: 'Outlook 2000-2003',
      description:
        "Outlook email client that is part of Microsoft's Office suites of the same years. Emails are displayed using the rendering engine from Internet Explorer.",
      kind: 'Windows App',
      engine: 'Trident',
    },
    {
      name: 'Outlook 2007-Current',
      description:
        "Outlook email client that is part of Microsoft's Office suites of the same years. Emails are displayed using the rendering engine from Microsoft Word.",
      kind: 'Windows App',
      engine: 'MsWord',
    },
    {
      name: 'Outlook for Mac',
      description:
        "Outlook email client that is of Microsoft's office suite for OS X and macOS.",
      kind: 'Mac App',
      engine: 'WebKit',
    },
    {
      name: 'Outlook for Android',
      description: "Microsoft's email app for Android platforms",
      kind: 'Android App',
      engine: 'Blink',
    },
    {
      name: 'Outlook for iOS',
      description: "Microsoft's email app for iOS platforms",
      kind: 'iOS App',
      engine: 'WebKit',
    },
    {
      name: 'Outlook for iPadOS',
      description: "Microsoft's email app for iPadOS platforms",
      kind: 'iPad App',
      engine: 'WebKit',
    },
    {
      name: 'Outlook.com',
      description:
        "Microsoft's webmail service, which can be accessed through a web browser. Outlook.com is a successor to Hotmail.",
      kind: 'Webmail',
      engine: 'Contextual',
    },
    {
      name: 'Outlook Express for Windows',
      description:
        'Email client bundled with Windows from Windows 98 until Windows Server 2003. Emails are displayed using the rendering engine from Internet Explorer.',
      kind: 'Windows App',
      engine: 'Trident',
    },
  ],
};
