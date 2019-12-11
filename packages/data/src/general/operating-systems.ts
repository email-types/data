import { OperatingSystem } from './operating-systems.types';

export const operatingSystems: OperatingSystem[] = [
  {
    name: 'Android',
    developer: 'Google',
    description: '',
    devices: ['Mobile', 'Tablet'],
  },
  {
    name: 'iOS',
    description: '',
    developer: 'Apple',
    devices: ['Mobile'],
  },
  {
    name: 'iPadOS',
    description: '',
    developer: 'Apple',
    devices: ['Tablet'],
  },
  {
    name: 'Linux',
    description: '',
    developer: null,
    devices: ['Desktop'],
  },
  {
    name: 'macOS',
    description: '',
    developer: 'Apple',
    devices: ['Desktop'],
  },
  {
    name: 'watchOS',
    description: '',
    developer: 'Apple',
    devices: ['Watch'],
  },
  {
    name: 'Windows',
    description: '',
    developer: 'Microsoft',
    devices: ['Desktop'],
  },
  {
    name: 'Universal',
    description: '',
    developer: null,
    devices: ['Desktop', 'Mobile', 'Tablet'],
  },
];
