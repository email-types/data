import { Product } from './types';

export const yahooMail: Product = {
  name: 'Yahoo Mail',
  clients: [
    {
      name: 'Yahoo Mail',
      description:
        "Yahoo!'s webmail service, which can be accessed through a web browser.",
      kind: 'Webmail',
      engine: 'Contextual',
    },
    {
      name: 'Yahoo Mail for Android',
      description: "Yahoo!'s email app for Android devices.",
      kind: 'Android App',
      engine: 'Gecko',
    },
    {
      name: 'Yahoo Mail for iOS',
      description: "Yahoo!'s email app for iOS devices.",
      kind: 'iOS App',
      engine: 'WebKit',
    },
    {
      name: 'Yahoo Mail for iPadOS',
      description: "Yahoo!'s email app for iPadOS devices.",
      kind: 'iPad App',
      engine: 'WebKit',
    },
  ],
};
