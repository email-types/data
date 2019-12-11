import { Device } from './features.types';
import { Developer } from './features.types';

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
