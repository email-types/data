import { Developer } from './data/misc/developers';
import { Engine } from './data/misc/engines';

type GlobalsString = string & {};

export interface Provider {
  abbr: string;
  client: Client;
  description: string;
  developer: GlobalsString | Developer;
  engine: Engine['name'];
  links?: Link[];
  name: string;
  os: OperatingSystem;
  platforms: Platform[];
  protocols?: (Protocol | SecureProtocol)[];
  type: ClientType;
  versions: string[];
}

interface Link {
  title: 'Wikipedia' | 'MDN' | 'caniuse' | GlobalsString;
  url: string;
}

type Platform = 'Desktop' | 'Mobile' | 'Tablet' | 'Watch';

/**
 * Email Clients
 *
 * All supported `Desktop Clients`, `Mobile Apps`, `Tablet Apps`,
 * and `Webmail Services`, across all platforms
 *
 * @see https://en.wikipedia.org/wiki/Comparison_of_email_clients
 * */
type Client = DesktopApp | MobileApp | TabletApp | WebmailService;

type ClientType = 'Application' | 'Webmail';

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
  | 'Aol Webmail'
  | 'G Suite'
  | 'Gmail'
  | 'Google Inbox'
  | 'iCloud'
  | 'Outlook.com'
  | 'Yahoo Mail';

//
// Client Specific Features
// ----------------------------------------------------------------------

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
  | 'Universal';

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
