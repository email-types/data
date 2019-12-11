import { DeveloperName } from '../types/common';

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
  developer: DeveloperName | null;
};
