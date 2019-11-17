import * as MSO from '../types/mso';
import { alternatives } from './alternatives';
import { standard } from './standard';

export * from './operators';
export * from './versions';
export * from './features';
export * from './syntaxes';
export * from './types';

export { alternatives, standard, MSO };

export const properties = {
  ...alternatives,
  ...standard,
};
