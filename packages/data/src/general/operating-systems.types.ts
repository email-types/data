import { Device } from './types';
import { Developer } from './types';

type Name =
  | 'Android'
  | 'iOS'
  | 'iPadOS'
  | 'Linux'
  | 'macOS'
  | 'watchOS'
  | 'Windows'
  | 'Universal';

export type OperatingSystem = {
  name: Name;
  description: string;
  developer: Developer | null;
  devices: Device[];
};
