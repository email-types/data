import { Client } from '../general/client.types';

export const yahooMail: Client = {
  name: 'Yahoo Mail',
  developer: 'Verizon',
  protocols: [],
  platforms: [
    {
      name: 'Yahoo Mail',
      description:
        "Yahoo!'s webmail service, which can be accessed through a web browser.",
      kind: 'Webmail',
      engine: 'Contextual',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Yahoo Mail for Android',
      description: "Yahoo!'s email app for Android devices.",
      kind: 'App.Android',
      engine: 'Gecko',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Yahoo Mail for iOS',
      description: "Yahoo!'s email app for iOS devices.",
      kind: 'App.iOS',
      engine: 'WebKit',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
    {
      name: 'Yahoo Mail for iPadOS',
      description: "Yahoo!'s email app for iPadOS devices.",
      kind: 'App.iPad',
      engine: 'WebKit',
      doctype: { preset: 'Unsure', supports: 'Unsure' },
    },
  ],
};
