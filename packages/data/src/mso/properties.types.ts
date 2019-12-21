import { Groups } from './groups';
import { Nullable, Description } from '../common.types';

export type Property = {
  syntax: string;
  description?: Description;
  initial: Nullable<string | number>;
  inherited: boolean;
  shorthand: boolean;
  groups?: Groups[];
};

export type Properties = Record<string, Property>;
