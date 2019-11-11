import { alternatives } from './alternatives';
import { fonts } from './fonts';
import { standard } from './standard';
import * as MSO from '../types/mso';

export * from './features';
export * from './syntaxes';
export * from './types';

export { alternatives, fonts, standard, MSO };

export const properties = {
  ...alternatives,
  ...fonts,
  ...standard,
};
