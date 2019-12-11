import { EmailClient } from './types';

export const outlookExpress: EmailClient = {
  name: 'Outlook Express',
  description:
    'Email client bundled with Windows from Windows 98 until Windows Server 2003. Emails are displayed using the rendering engine from Internet Explorer.',
  platforms: [
    {
      kind: 'Application',
      devices: ['Desktop'],
      os: 'Windows',
      engine: 'Trident',
    },
  ],
};
