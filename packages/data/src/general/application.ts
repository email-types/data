import { Application } from './application.types';

export const application: Application[] = [
  {
    name: 'App.Mac',
    kind: 'Application',
    devices: ['Desktop'],
    os: 'macOS',
  },
  {
    name: 'App.iOS',
    kind: 'Application',
    devices: ['Mobile'],
    os: 'iOS',
  },
  {
    name: 'App.iPad',
    kind: 'Application',
    devices: ['Tablet'],
    os: 'iPadOS',
  },
  {
    name: 'App.iWatch',
    kind: 'Application',
    devices: ['Watch'],
    os: 'watchOS',
  },
  {
    name: 'App.Android',
    kind: 'Application',
    devices: ['Mobile', 'Tablet'],
    os: 'Android',
  },
  {
    name: 'App.Android.Tablet',
    kind: 'Application',
    devices: ['Tablet'],
    os: 'Android',
  },
  {
    name: 'App.Android.Mobile',
    kind: 'Application',
    devices: ['Mobile'],
    os: 'Android',
  },
  {
    name: 'App.Windows',
    kind: 'Application',
    devices: ['Desktop'],
    os: 'Windows',
  },
  {
    name: 'App.Windows.Tablet',
    kind: 'Application',
    devices: ['Tablet'],
    os: 'Windows',
  },
  {
    name: 'App.Windows.Mobile',
    kind: 'Application',
    devices: ['Mobile'],
    os: 'Windows',
  },
  {
    name: 'App.Linux',
    kind: 'Application',
    devices: ['Desktop'],
    os: 'Linux',
  },
  // Generics
  {
    name: 'App.Mobile',
    kind: 'Application',
    devices: ['Mobile'],
    os: 'Unsure',
  },
];
