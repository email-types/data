import { Application } from './application.types';
import { Developer, Protocol, SecureProtocol } from './features.types';
import { RenderingEngine } from './rendering-engines.types';
import { Webmail } from './webmail.types';
import { Links, $Ref, UnsureOrType, Description } from '../common';
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

type Platform = {
  /* Name of the platform */
  name: string;
  /* About of the platform */
  description?: Description;
  /* Kind of platform */
  kind: $Ref<Application | Webmail>;
  /* Rendering Engine (defines css prefix) */
  engine: UnsureOrType<$Ref<RenderingEngine>>;
  /* Doctype support of the platform */
  doctype?: {
    /* The doctype used by the platform when no doctype is set. When set to `None`, no doctype will be used unless you set one. */
    preset: UnsureOrType<$Ref<Doctype> | 'None'>;
    /* A list of supported doctypes. When set to `None`, any doctype that you set will be ignored. */
    supports: UnsureOrType<$Ref<Doctype>[] | 'None'>;
  };
};

export interface Client {
  /* Name of the email client */
  name: Name;
  /* Name of the developer */
  developer: Developer;
  /* List of supported protocols */
  protocols: UnsureOrType<(Protocol | SecureProtocol)[]>;
  /* List of supported platforms */
  platforms: Platform[];
  /* Optional links */
  links?: Links;
}
