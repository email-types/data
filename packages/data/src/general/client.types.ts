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
  /* About of the platform */
  description?: string;
  /* Kind of platform */
  kind: Application['name'] | Webmail['name'];
  /* Rendering Engine (defines css prefix) */
  engine: RenderingEngine['name'] | 'Unknown';
  /* Doctype that this platform uses, regardless of what you define */
  doctype?: Doctype['name'] | 'Unknown';
  /* Protocols that this platform uses */
  protocols?: (Protocol | SecureProtocol)[] | 'Unknown';
};

export type Client = {
  name: Name;
  developer: Developer;
  links?: Readonly<Link>[];
  platforms: Platform[];
};
