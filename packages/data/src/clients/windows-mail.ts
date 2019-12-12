import { Client } from '../general/client.types';

export const windowsMail: Client = {
  name: 'Windows Mail',
  developer: 'Microsoft',
  protocols: [],
  platforms: [
    {
      name: 'Windows Live Mail',
      description:
        'Email client bundled with Windows from Windows 7 until Windows 8. Emails are displayed using the rendering engine from Internet Explorer.',
      kind: 'App.Windows',
      engine: 'Trident',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Windows 10 Mail',
      description:
        'Email client bundled with Windows 10. Emails are displayed using the rendering engine from Microsoft Word.',
      kind: 'App.Windows',
      engine: 'MsWord',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Windows Phone 8 Mail',
      description: "Microsoft's default email app on Windows Phone 8.",
      kind: 'App.Windows.Mobile',
      engine: 'Trident',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
  ],
};
