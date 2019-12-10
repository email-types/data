import { Name as EmailClientName } from './email-clients.types';
import { Name as OperatingSystemName } from './operating-systems.types';
import { Name as RenderingEngineName } from './rendering-engines.types';

type Name =
  | 'Apple'
  | 'Google'
  | 'IBM'
  | 'Microsoft'
  | 'Mozilla'
  | 'Verizon'
  | 'Other';

export type Developer = {
  name: Name;
  description?: string;
  clients: EmailClientName[];
  engines?: RenderingEngineName[] | null;
  os?: OperatingSystemName[] | null;
};

export type Developers = Developer[];
