import { Device } from './features.types';
import { Developer } from './features.types';
import { Nullable, Description } from '../common';

type Name =
  | 'Android'
  | 'iOS'
  | 'iPadOS'
  | 'Linux'
  | 'macOS'
  | 'watchOS'
  | 'Windows'
  | 'Universal';

export interface OperatingSystem {
  name: Name;
  description?: Description;
  developer: Nullable<Developer>;
  devices: Device[];
}
