import { Description } from '../common';
import { Group } from '../mso';

export type Aria = {
  name: string;
  syntax: string;
  description?: Description;
  groups?: Group[];
};
