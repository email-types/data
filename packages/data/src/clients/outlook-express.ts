import { Client } from '../general/client.types';

export const outlookExpress: Client = {
  name: 'Outlook Express',
  developer: 'Microsoft',
  protocols: [],
  platforms: [
    {
      name: 'Outlook Express for Windows',
      description:
        'Email client bundled with Windows from Windows 98 until Windows Server 2003. Emails are displayed using the rendering engine from Internet Explorer.',
      kind: 'App.Windows',
      engine: 'Trident',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
  ],
};
