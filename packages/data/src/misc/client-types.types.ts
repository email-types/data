import { OperatingSystem } from './operating-systems.types';

type Name =
  | 'Android App'
  | 'Android Tablet App'
  | 'Android Mobile App'
  | 'iOS App'
  | 'iPad App'
  | 'iWatch App'
  | 'Linux App'
  | 'Mac App'
  | 'Mobile App'
  | 'Webmail'
  | 'Windows App'
  | 'Windows Tablet App'
  | 'Windows Mobile App';

/**
 * Email Client Kinds
 *
 * */
type Kind = 'Application' | 'Webmail';

/**
 * Device Types
 *
 * */
type Platform = 'Desktop' | 'Mobile' | 'Tablet' | 'Watch';

export type ClientType = {
  name: Name;
  kind: Kind;
  /* device (defines compat 'target') */
  platforms: Platform[];
  /* Operating System (defines compat 'target') */
  os: OperatingSystem['name'] | 'Unknown';
};
