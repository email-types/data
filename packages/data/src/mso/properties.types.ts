import { Group } from './groups';
import { Nullable, Description } from '../common';

export type Property = {
  syntax: string;
  description?: Description;
  initial: Nullable<string | number>;
  inherited: boolean;
  shorthand: boolean;
  groups?: Group[];
};

export type Properties = Record<string, Property>;
