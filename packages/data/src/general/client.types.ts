import { Application } from './application.types';
import { Developer, Protocol, SecureProtocol } from './features.types';
import { RenderingEngine } from './rendering-engines.types';
import { Webmail } from './webmail.types';
import { Link, Unknown } from '../common';
import { Doctype } from '../html';

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

type DoctypeSupport = {
  /* The doctype used by the platform when no doctype is set. When set to `None`, no doctype will be used unless you set one. */
  preset: Doctype['name'] | 'None';
  /* The supported doctype or a list of supported doctypes. When set to `None`, any doctype that you set will be ignored. */
  supports: Doctype['name'] | Doctype['name'][] | 'None';
};

type Platform = {
  /* Name of the platform */
  name: string;
  /* About of the platform */
  description?: string;
  /* Kind of platform */
  kind: Application['name'] | Webmail['name'];
  /* Rendering Engine (defines css prefix) */
  engine: RenderingEngine['name'] | Unknown;
  /**
   * Doctype Support
   *
   * - `object`: See DoctypeSupport object.
   * - `Unknown`: Zero idea. Likely because it has not been tested.
   * - `None`: No doctype is used by the platform. Any doctype that you set will be ignored.
   */
  doctype?: DoctypeSupport | Unknown | 'None';
};

export type Client = {
  /* Name of the email client */
  name: Name;
  /* Name of the developer */
  developer: Developer;
  /* List of supported protocols */
  protocols: (Protocol | SecureProtocol)[] | Unknown;
  /* List of supported platforms */
  platforms: Platform[];
  /* Optional links */
  links?: Readonly<Link>[];
};
