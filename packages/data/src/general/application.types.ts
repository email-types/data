import { Device, Kind } from './features.types';
import { OperatingSystem } from './operating-systems.types';
import { UnsureOrType, $Ref } from '../common';

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

export interface Application {
  kind: Kind;
  name: Name;
  devices: Device[];
  os: UnsureOrType<$Ref<OperatingSystem>>;
}
