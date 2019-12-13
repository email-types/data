import { Client } from '../general/client.types';

export const outlookExpress: Client = {
  name: 'Outlook Express',
  developer: 'Microsoft',
  protocols: [],
  platforms: [
    {
      name: 'Outlook Express for Windows',
      description:
        'Email client bundled with Windows from Windows 3.x until Windows XP. Emails are displayed using the rendering engine from Internet Explorer.',
      kind: 'App.Windows',
      engine: 'Trident',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Outlook Express for Mac',
      description:
        'Email client bundled with Microsoft Office Macintosh Edition. Emails are displayed using the rendering engine from Internet Explorer.',
      kind: 'App.Mac',
      engine: 'Trident',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
  ],
};
