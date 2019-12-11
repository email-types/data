import { Product } from './types';

export const samsungMail: Product = {
  name: 'Samsung Mail',
  links: [
    {
      title: 'Litmus Blog Post',
      url:
        'https://litmus.com/blog/samsung-now-available-in-litmus-email-previews',
    },
  ],
  clients: [
    {
      name: 'Samsung Mail for Android',
      description: "Samsung's native email app for Android devices.",
      kind: 'Application',
      platforms: ['Mobile'],
      os: 'Unknown',
      engine: 'Unknown',
    },
  ],
};
