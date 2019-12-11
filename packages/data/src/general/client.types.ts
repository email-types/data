import { Application } from './application.types';
import { Developer, Protocol, SecureProtocol } from './features.types';
import { RenderingEngine } from './rendering-engines.types';
import { Webmail } from './webmail.types';
import { Doctype } from '../html/doctypes.types';
import { Link } from '../common';

/**
 * Email Client Names
 *
 * @see https://en.wikipedia.org/wiki/Comparison_of_email_clients
 * @see https://en.wikipedia.org/wiki/Comparison_of_webmail_providers
 * */
type Name =
  | 'Android Mail'
  | 'Aol Mail'
  | 'Apple Mail'
  | 'Blackberry Mail'
  | 'G Suite'
  | 'Gmail'
  | 'Gmail IMAP'
  | 'Google Inbox'
  | 'IBM Notes'
  | 'iCloud'
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
  /* About of the platform */
  description?: string;
  /* Kind of platform */
  kind: Application['name'] | Webmail['name'];
  /* Rendering Engine (defines css prefix) */
  engine: RenderingEngine['name'] | 'Unknown';
  /* Doctype that this platform uses, regardless of what you define. When set to `Inherits`, the doctype uses it's parent's doctype */
  doctype: Doctype['name'] | 'Inherits' | 'Unknown';
};

export type Client = {
  /* Name of the email client */
  name: Name;
  /* Name of the developer */
  developer: Developer;
  /* List of supported protocols */
  protocols: (Protocol | SecureProtocol)[] | 'Unknown';
  /* List of supported platforms */
  platforms: Platform[];
  /* Optional links */
  links?: Readonly<Link>[];
};
