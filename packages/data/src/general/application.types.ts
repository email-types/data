import { Device, Kind } from './types';
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
  | 'Windows App'
  | 'Windows Tablet App'
  | 'Windows Mobile App';

export type Application = {
  kind: Kind;
  name: Name;
  devices: Device[];
  os: OperatingSystem['name'] | 'Unknown';
};
