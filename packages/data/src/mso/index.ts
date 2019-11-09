import { alternatives } from './data/alternatives';
import { fonts } from './data/fonts';
import { standard } from './data/standard';

export * from './data/features';
export * from './data/syntaxes';
export * from './data/types';
export * from './types';

export { alternatives, fonts, standard };

export const properties = {
  ...alternatives,
  ...fonts,
  ...standard,
};
