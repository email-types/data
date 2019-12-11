import {
  Doctype,
  Developer,
  RenderingEngine,
  Application,
  Webmail,
  Link,
} from '..';

/**
 * Email Client Names
 *
 * @see https://en.wikipedia.org/wiki/Comparison_of_email_clients
 * @see https://en.wikipedia.org/wiki/Comparison_of_webmail_providers
 * */
export type Name =
  | 'Android Mail'
  | 'Apple Mail'
  | 'Aol Mail'
  | 'Blackberry Mail'
  | 'Gmail'
  | 'Gmail IMAP'
  | 'Google Inbox'
  | 'G Suite'
  | 'iCloud'
  | 'IBM Notes'
  | 'Outlook'
  | 'Outlook Express'
  | 'Postbox'
  | 'Samsung Mail'
  | 'Thunderbird'
  | 'Windows Mail'
  | 'Yahoo Mail';

type Platform = {
  /* Name of the platform */
  name: string;
  /* Description of the platform */
  description?: string;
  /* Kind of platform */
  kind: Application['name'] | Webmail['name'];
  /* Rendering Engine (defines css prefix) */
  engine: RenderingEngine['name'] | 'Unknown';
  /* Doctype that this email uses, regardless of what you define */
  doctype?: Doctype['name'] | 'Unknown';
};

export type Client = {
  name: Name;
  developer: Developer;
  links?: Readonly<Link>[];
  platforms: Platform[];
};
