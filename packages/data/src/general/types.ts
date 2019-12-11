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

export type Device = 'Desktop' | 'Mobile' | 'Tablet' | 'Watch';

export type Kind = 'Application' | 'Webmail';

/**
 * Protocols
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

export type SecureProtocol =
  | 'SSL'
  | 'TLS'
  | 'TLSv1.3'
  | 'TLSv1.2'
  | 'TLSv1.1'
  | 'TLSv1';
