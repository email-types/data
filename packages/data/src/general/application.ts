import { Application } from './application.types';

export const application: Application[] = [
  {
    name: 'Mac App',
    kind: 'Application',
    devices: ['Desktop'],
    os: 'macOS',
  },
  {
    name: 'iOS App',
    kind: 'Application',
    devices: ['Mobile'],
    os: 'iOS',
  },
  {
    name: 'iPad App',
    kind: 'Application',
    devices: ['Tablet'],
    os: 'iPadOS',
  },
  {
    name: 'iWatch App',
    kind: 'Application',
    devices: ['Watch'],
    os: 'watchOS',
  },
  {
    name: 'Android App',
    kind: 'Application',
    devices: ['Mobile', 'Tablet'],
    os: 'Android',
  },
  {
    name: 'Android Tablet App',
    kind: 'Application',
    devices: ['Tablet'],
    os: 'Android',
  },
  {
    name: 'Android Mobile App',
    kind: 'Application',
    devices: ['Mobile'],
    os: 'Android',
  },
  {
    name: 'Windows App',
    kind: 'Application',
    devices: ['Desktop'],
    os: 'Windows',
  },
  {
    name: 'Windows Tablet App',
    kind: 'Application',
    devices: ['Tablet'],
    os: 'Windows',
  },
  {
    name: 'Windows Mobile App',
    kind: 'Application',
    devices: ['Mobile'],
    os: 'Windows',
  },
  {
    name: 'Linux App',
    kind: 'Application',
    devices: ['Desktop'],
    os: 'Linux',
  },
  // Generics
  {
    name: 'Mobile App',
    kind: 'Application',
    devices: ['Mobile'],
    os: 'Unknown',
  },
];
