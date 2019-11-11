import { apple } from './apple';
import { aol } from './aol';
import { google } from './google';
import { ibm } from './ibm';
import { microsoft } from './microsoft';
import { mozilla } from './mozilla';
import { yahoo } from './yahoo';
import { other } from './other';
import { Provider } from '../types';

export { apple, aol, google, ibm, microsoft, mozilla, yahoo, other };

export const providers: Provider[] = [
  ...apple,
  ...aol,
  ...google,
  ...ibm,
  ...microsoft,
  ...mozilla,
  ...yahoo,
  ...other,
];
