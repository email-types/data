import { ClientType } from './client-types.types';

export const clientTypes: ClientType[] = [
  {
    name: 'Webmail',
    kind: 'Webmail',
    platforms: ['Desktop', 'Mobile', 'Tablet'],
    os: 'Universal',
  },
  {
    name: 'Mac App',
    kind: 'Application',
    platforms: ['Desktop'],
    os: 'macOS',
  },
  {
    name: 'iOS App',
    kind: 'Application',
    platforms: ['Mobile'],
    os: 'iOS',
  },
  {
    name: 'iPad App',
    kind: 'Application',
    platforms: ['Tablet'],
    os: 'iPadOS',
  },
  {
    name: 'iWatch App',
    kind: 'Application',
    platforms: ['Watch'],
    os: 'watchOS',
  },
  {
    name: 'Android App',
    kind: 'Application',
    platforms: ['Mobile', 'Tablet'],
    os: 'Android',
  },
  {
    name: 'Android Tablet App',
    kind: 'Application',
    platforms: ['Tablet'],
    os: 'Android',
  },
  {
    name: 'Android Mobile App',
    kind: 'Application',
    platforms: ['Mobile'],
    os: 'Android',
  },
  {
    name: 'Windows App',
    kind: 'Application',
    platforms: ['Desktop'],
    os: 'Windows',
  },
  {
    name: 'Windows Tablet App',
    kind: 'Application',
    platforms: ['Tablet'],
    os: 'Windows',
  },
  {
    name: 'Windows Mobile App',
    kind: 'Application',
    platforms: ['Mobile'],
    os: 'Windows',
  },
  {
    name: 'Linux App',
    kind: 'Application',
    platforms: ['Desktop'],
    os: 'Linux',
  },
  // Generics
  {
    name: 'Mobile App',
    kind: 'Application',
    platforms: ['Mobile'],
    os: 'Unknown',
  },
];
