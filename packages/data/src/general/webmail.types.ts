import { Device, Kind } from './features.types';
import { OperatingSystem } from './operating-systems.types';
import { UnsureOrType, $Ref } from '../common';

type Name = 'Webmail' | 'Webmail.Desktop' | 'Webmail.Mobile' | 'Webmail.Tablet';

export interface Webmail {
  kind: Kind;
  name: Name;
  devices: Device[];
  os: UnsureOrType<$Ref<OperatingSystem>>;
}
