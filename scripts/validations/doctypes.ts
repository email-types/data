import { validate } from 'validate-typescript';
import { doctypes } from '../../packages/data/dist/misc/doctypes';
import { scheme } from '../../packages/data/dist/misc/doctypes.scheme';

type Result = { data: number; result: number };

export default (): Result => {
  const result = doctypes.map((d) => validate(scheme, d));
  return { data: doctypes.length, result: result.length };
};
