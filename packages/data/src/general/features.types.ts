/**
 * Names of developers
 * */
export type Developer =
  | 'Apple'
  | 'Google'
  | 'IBM'
  | 'ITC'
  | 'Microsoft'
  | 'Mozilla'
  | 'Postbox'
  | 'Samsung'
  | 'Verizon';

/**
 * Devices Types
 * */
export type Device = 'Desktop' | 'Mobile' | 'Tablet' | 'Watch';

/**
 * Kind of Platform
 * */
export type Kind = 'Application' | 'Webmail';

/**
 * Protocols used by a Platform
 *
 * @see https://en.m.wikipedia.org/wiki/Comparison_of_email_clients#Communication_and_access_protocol_support
 * */
export type Protocol =
  | 'POP3'
  | 'IMAP4'
  | 'SMPT'
  | 'NNTP'
  | 'LDAPv2'
  | 'LDAPv3'
  | 'IPv6'
  | 'MAPI';

/**
 * Secure Protocols used by a Platform
 * */
export type SecureProtocol =
  | 'SSL'
  | 'TLS'
  | 'TLSv1.3'
  | 'TLSv1.2'
  | 'TLSv1.1'
  | 'TLSv1';
