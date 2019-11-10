import { alternatives } from './data/alternatives';
import { fonts } from './data/fonts';
import { standard } from './data/standard';
import * as MSO from './types';

export * from './data/features';
export * from './data/syntaxes';
export * from './data/types';
export * from './types';

export { alternatives, fonts, standard, MSO };

export const properties = {
  ...alternatives,
  ...fonts,
  ...standard,
};
