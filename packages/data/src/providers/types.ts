import { Developer, RenderEngine } from '../misc';

type GlobalsString = string & {};

export interface Provider {
  abbr: string;
  client: Client;
  description: string;
  developer: GlobalsString | Developer;
  engine: RenderEngine;
  links?: Link[];
  name: string;
  os: OperatingSystem;
  platforms: Platform[];
  protocols?: (Protocol | SecureProtocol)[];
  type: Type;
  versions: string[];
}

interface Link {
  title: 'Homepage' | 'Wikipedia' | 'MDN' | 'caniuse' | GlobalsString;
  url: string;
}

/**
 * Email Clients
 *
 * All supported `Desktop Clients`, `Mobile Apps`, `Tablet Apps`,
 * and `Webmail Services`, across all platforms
 *
 * @see https://en.wikipedia.org/wiki/Comparison_of_email_clients
 * */
type Client = DesktopApp | MobileApp | TabletApp | WebmailService;

type DesktopApp =
  | 'Aol Mail'
  | 'Apple Mail'
  | 'IBM Notes'
  | 'Outlook'
  | 'Outlook Express'
  | 'Postbox'
  | 'Thunderbird'
  | 'Windows 10 Mail'
  | 'Windows Live Mail';

type MobileApp =
  | 'Android Mail'
  | 'Aol Mail'
  | 'Apple Mail'
  | 'Blackberry'
  | 'Gmail'
  | 'Gmail IMAP'
  | 'Google Inbox'
  | 'Outlook'
  | 'Samsung Mail'
  | 'Windows Phone 8 Mail'
  | 'Yahoo Mail';

type TabletApp =
  | 'Apple Mail'
  | 'Gmail'
  | 'Gmail IMAP'
  | 'Google Inbox'
  | 'Outlook';

type WebmailService =
  | 'Aol Mail'
  | 'G Suite'
  | 'Gmail'
  | 'Google Inbox'
  | 'iCloud'
  | 'Outlook.com'
  | 'Yahoo Mail';

//
// Client Specific Features
// ----------------------------------------------------------------------
type Type = 'Application' | 'Webmail';

type Platform = 'Desktop' | 'Mobile' | 'Tablet' | 'Watch';

/**
 * Operating Systems
 * */
type OperatingSystem =
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
 * Protocols
 *
 * @see https://en.m.wikipedia.org/wiki/Comparison_of_email_clients#Communication_and_access_protocol_support
 * */
type Protocol =
  | 'POP3'
  | 'IMAP4'
  | 'SMPT'
  | 'NNTP'
  | 'LDAPv2'
  | 'LDAPv3'
  | 'IPv6'
  | 'MAPI';

type SecureProtocol =
  | 'SSL'
  | 'TLS'
  | 'TLSv1.3'
  | 'TLSv1.2'
  | 'TLSv1.1'
  | 'TLSv1';

// /**
//  * Filename Extensions
//  *
//  * @see https://en.m.wikipedia.org/wiki/Email#Filename_extensions
//  * */
// type Extensions = 'eml' | 'emlx' | 'msg' | 'mbx';
