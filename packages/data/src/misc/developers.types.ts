import { Name as EmailClientName, OperatingSystem } from '../clients/types';
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
  os?: OperatingSystem[] | null;
};

export type Developers = Developer[];
