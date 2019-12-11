import { Client } from './types';

export const yahooMail: Client = {
  name: 'Yahoo Mail',
  developer: 'Verizon',
  platforms: [
    {
      name: 'Yahoo Mail',
      description:
        "Yahoo!'s webmail service, which can be accessed through a web browser.",
      kind: 'Webmail',
      engine: 'Contextual',
      doctype: 'Unknown',
    },
    {
      name: 'Yahoo Mail for Android',
      description: "Yahoo!'s email app for Android devices.",
      kind: 'Android App',
      engine: 'Gecko',
      doctype: 'Unknown',
    },
    {
      name: 'Yahoo Mail for iOS',
      description: "Yahoo!'s email app for iOS devices.",
      kind: 'iOS App',
      engine: 'WebKit',
      doctype: 'Unknown',
    },
    {
      name: 'Yahoo Mail for iPadOS',
      description: "Yahoo!'s email app for iPadOS devices.",
      kind: 'iPad App',
      engine: 'WebKit',
      doctype: 'Unknown',
    },
  ],
};
