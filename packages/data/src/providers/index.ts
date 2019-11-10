import { apple } from './data/apple';
import { aol } from './data/aol';
import { google } from './data/google';
import { ibm } from './data/ibm';
import { microsoft } from './data/microsoft';
import { mozilla } from './data/mozilla';
import { yahoo } from './data/yahoo';
import { other } from './data/other';

export * from './types';

export { apple, aol, google, ibm, microsoft, mozilla, yahoo, other };

export const providers = [
  apple,
  aol,
  google,
  ibm,
  microsoft,
  mozilla,
  yahoo,
  other,
].flat();
