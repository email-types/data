import { Product } from './types';

export const windowsMail: Product = {
  name: 'Windows Mail',
  clients: [
    {
      name: 'Windows Live Mail',
      description:
        'Email client bundled with Windows from Windows 7 until Windows 8. Emails are displayed using the rendering engine from Internet Explorer.',
      kind: 'Windows App',
      engine: 'Trident',
    },
    {
      name: 'Windows 10 Mail',
      description:
        'Email client bundled with Windows 10. Emails are displayed using the rendering engine from Microsoft Word.',
      kind: 'Windows App',
      engine: 'MsWord',
    },
    {
      name: 'Windows Phone 8 Mail',
      description: "Microsoft's default email app on Windows Phone 8.",
      kind: 'Windows Mobile App',
      engine: 'Trident',
    },
  ],
};
