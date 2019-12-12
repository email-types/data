import { OperatingSystem } from './operating-systems.types';

export const operatingSystems: OperatingSystem[] = [
  {
    name: 'Android',
    developer: 'Google',
    devices: ['Mobile', 'Tablet'],
  },
  {
    name: 'iOS',
    developer: 'Apple',
    devices: ['Mobile'],
  },
  {
    name: 'iPadOS',
    developer: 'Apple',
    devices: ['Tablet'],
  },
  {
    name: 'Linux',
    developer: null,
    devices: ['Desktop'],
  },
  {
    name: 'macOS',
    developer: 'Apple',
    devices: ['Desktop'],
  },
  {
    name: 'watchOS',
    developer: 'Apple',
    devices: ['Watch'],
  },
  {
    name: 'Windows',
    developer: 'Microsoft',
    devices: ['Desktop'],
  },
  {
    name: 'Universal',
    developer: null,
    devices: ['Desktop', 'Mobile', 'Tablet'],
  },
];
