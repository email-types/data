import { Client } from '../general/client.types';

export const samsungMail: Client = {
  name: 'Samsung Mail',
  developer: 'Samsung',
  links: [
    {
      title: 'Litmus Blog Post',
      url:
        'https://litmus.com/blog/samsung-now-available-in-litmus-email-previews',
    },
  ],
  platforms: [
    {
      name: 'Samsung Mail for Android',
      description: "Samsung's native email app for Android devices.",
      kind: 'Mobile App',
      engine: 'Unknown',
      doctype: 'Unknown',
    },
  ],
};
