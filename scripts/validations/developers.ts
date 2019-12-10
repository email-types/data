import { validate } from 'validate-typescript';
import { developers } from '../../packages/data/dist/misc/developers';
import { scheme } from '../../packages/data/dist/misc/developers.scheme';

type Result = { data: number; result: number };

export default (): Result => {
  const result = developers.map((d) => validate(scheme, d));
  return { data: developers.length, result: result.length };
};
