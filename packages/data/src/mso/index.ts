import * as MSO from '../types/mso';
import { operators, versions } from './conditionals';
import { alternatives } from './alternatives';
import { standard } from './standard';

export * from './conditionals';
export * from './features';
export * from './syntaxes';
export * from './types';

export { alternatives, standard, operators, versions, MSO };

export const properties = {
  ...alternatives,
  ...standard,
};
