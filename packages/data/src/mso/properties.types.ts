import { Groups } from './groups';

export type Property = {
  syntax: string;
  description?: string;
  initial: string | number | null;
  inherited: boolean;
  shorthand: boolean;
  groups?: Groups[];
};

export type Properties = Record<string, Property>;
