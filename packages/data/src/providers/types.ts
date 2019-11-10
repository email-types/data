type GlobalsString = string & {};

export interface Provider {
  abbr: string;
  client: Client;
  description: string;
  developer: Developer;
  engine: RenderingEngine;
  links?: Link[];
  name: string;
  os: OperatingSystem;
  platforms: Platform[];
  prefix: VendorPrefix;
  protocols?: (Protocol | SecureProtocol)[];
  type: ClientType;
  versions: string[];
}

export interface Link {
  title: 'Wikipedia' | 'MDN' | 'caniuse' | GlobalsString;
  url: string;
}

export type Platform = 'Desktop' | 'Mobile' | 'Tablet' | 'Watch';

/**
 * Developers
 *
 * @see https://en.wikipedia.org/wiki/Comparison_of_webmail_providers
 */
export type Developer =
  | 'Apple'
  | 'Google'
  | 'IBM'
  | 'Microsoft'
  | 'Mozilla'
  | 'Verizon'
  | 'Other'
  | GlobalsString;

/**
 * Email Clients
 *
 * All supported `Desktop Clients`, `Mobile Apps`, `Tablet Apps`,
 * and `Webmail Services`, across all platforms
 *
 * @see https://en.wikipedia.org/wiki/Comparison_of_email_clients
 */
export type Client = DesktopApp | MobileApp | TabletApp | WebmailService;

export type ClientType = 'Application' | 'Webmail';

export type DesktopApp =
  | 'Aol Mail'
  | 'Apple Mail'
  | 'IBM Notes'
  | 'Outlook'
  | 'Outlook Express'
  | 'Postbox'
  | 'Thunderbird'
  | 'Windows 10 Mail'
  | 'Windows Live Mail';

export type MobileApp =
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

export type TabletApp =
  | 'Apple Mail'
  | 'Gmail'
  | 'Gmail IMAP'
  | 'Google Inbox'
  | 'Outlook';

export type WebmailService =
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

/**
 * CSS Vendor Prefixes
 *
 * @see https://en.m.wikipedia.org/wiki/Comparison_of_browser_engines_(CSS_support)#Vendor-specific
 */
export type VendorPrefix =
  | 'Ms'
  | 'Moz'
  | 'WebKit'
  | 'Mso'
  | 'Contextual'
  | 'Unknown';

/**
 * Rendering Engines
 *
 * - `Blink`: Developed by Google. Used in Google Chrome web browsers and part of the Chromium project.
 * - `Trident`: Developed by Microsoft. Used for Microsoft Windows version of Internet Explorer.
 * - `Gecko`: Developed by Mozilla. Used in the Firefox browser and the Thunderbird email client.
 * - `WebKit`: Developed by Apple. Used in the Safari web browser and all of the iOS web browsers.
 * - `Presto`: Developed by Opera. Depricated engine used in the Opera 7 thru Opera 14 web browers.
 * - `MsWord`: yes, Microsoft Word.
 * - `Contextual`: To be used when the platform is any variation of Webmail.
 * - `Unknown`: Zero idea.
 *
 * @see https://en.m.wikipedia.org/wiki/Comparison_of_browser_engines
 */
export type RenderingEngine =
  | 'Blink'
  | 'Trident'
  | 'Gecko'
  | 'WebKit'
  | 'Presto'
  | 'MsWord'
  | 'Contextual'
  | 'Unknown';

/**  Operating Systems */
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
 * Protocols
 *
 * @see https://en.m.wikipedia.org/wiki/Comparison_of_email_clients#Communication_and_access_protocol_support
 */
export type Protocol =
  | 'POP3'
  | 'IMAP4'
  | 'SMPT'
  | 'NNTP'
  | 'LDAPv2'
  | 'LDAPv3'
  | 'IPv6'
  | 'MAPI';

export type SecureProtocol = 'SSL' | 'TLS';

/**
 * Filename Extensions
 *
 * @see https://en.m.wikipedia.org/wiki/Email#Filename_extensions
 */
export type Extensions = 'eml' | 'emlx' | 'msg' | 'mbx';
