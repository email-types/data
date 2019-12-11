import { Doctype } from '../misc/doctypes.types';
import { RenderingEngine } from '../misc/rendering-engines.types';
import { ClientType } from '../misc/client-types.types';
import { Link } from '../types/common';

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

type Client = {
  name: string;
  description?: string;
  kind: ClientType['name'];
  /* Rendering Engine (defines css prefix) */
  engine: RenderingEngine['name'] | 'Unknown';
  /* Doctype that this email uses, regardless of what you define */
  doctype?: Doctype['name'];
};

export type Product = {
  name: Name;
  links?: Readonly<Link>[];
  clients: Client[];
};
