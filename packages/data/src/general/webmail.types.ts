import { Device, Kind } from './features.types';
import { OperatingSystem } from './operating-systems.types';

type Name = 'Webmail' | 'Desktop Webmail' | 'Mobile Webmail' | 'Tablet Webmail';

export type Webmail = {
  kind: Kind;
  name: Name;
  devices: Device[];
  os: OperatingSystem['name'] | 'Unknown';
};
