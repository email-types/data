import { resolve } from 'path';
import { outputJson } from 'fs-extra';
import { developers } from '../../packages/data/dist/misc/developers';

type Result = { result: number };

const clean = (_: string, value: unknown): unknown => {
  if (value === null || value === '' || value === [] || value === {}) {
    return undefined;
  }
  return value;
};

export default async (): Promise<Result> => {
  const data = developers.reduce((acc, o) => {
    acc[o.name.toLowerCase().replace(/\s/g, '-')] = o;
    return acc;
  }, {} as Record<string, typeof developers[number]>);

  const output = resolve(process.cwd(), 'packages/data/json/developers.json');
  await outputJson(output, data, { replacer: clean });

  return { result: developers.length };
};
