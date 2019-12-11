import { Name as DoctypeName } from '../misc/doctypes.types';
import { Name as RenderingEngineName } from '../misc/rendering-engines.types';
import { Link } from '../types/common';

/**
 * Email Client Kinds
 *
 * */
export type Kind = 'Application' | 'Webmail';

/**
 * Device Types
 *
 * */
export type Device = 'Desktop' | 'Mobile' | 'Tablet' | 'Watch';

/**
 * Operating Systems
 * */
export type OperatingSystem =
  | 'Android'
  | 'iOS'
  | 'iPadOS'
  | 'Linux'
  | 'macOS'
  | 'watchOS'
  | 'Windows'
  | 'Universal'
  | 'Unknown';

/**
 * Email Client Names
 *
 * @see https://en.wikipedia.org/wiki/Comparison_of_email_clients
 * */
export type Name =
  | 'Android Mail'
  | 'Apple Mail'
  | 'Aol Mail'
  | 'Blackberry'
  | 'Gmail'
  | 'Google Inbox'
  | 'G Suite'
  | 'iCloud'
  | 'IBM Notes'
  | 'Outlook'
  | 'Outlook Express'
  | 'Postbox'
  | 'Samsung Mail'
  | 'Thunderbird'
  | 'Windows 10 Mail'
  | 'Windows Phone 8 Mail'
  | 'Yahoo Mail';

type Platform = {
  kind: Kind;
  /* device (defines compat 'target') */
  devices: Device[];
  /* Operating System (defines compat 'target') */
  os: OperatingSystem;
  /* Rendering Engine (defines css prefix) */
  engine: RenderingEngineName;
  /* Doctype that this email uses, regardless of what you define */
  doctype?: DoctypeName;
};

export type EmailClient = {
  name: Name;
  description?: string;
  links?: Readonly<Link>[];
  platforms: Platform[];
};
