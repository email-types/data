import { Device } from './types';
import { OperatingSystem } from './operating-systems.types';

type Name = 'Webmail';

export type Webmail = {
  kind: 'Webmail';
  name: Name;
  devices: Device[];
  os: OperatingSystem['name'] | 'Unknown';
};
