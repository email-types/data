import { resolve } from 'path';
import { outputJson } from 'fs-extra';
import { doctypes } from '../../packages/data/dist/misc/doctypes';

type Result = { result: number };

const clean = (_: string, value: unknown): unknown => {
  if (value === null || value === '' || value === [] || value === {}) {
    return undefined;
  }
  return value;
};

export default async (): Promise<Result> => {
  const data = doctypes.reduce((acc, o) => {
    acc[o.name.toLowerCase().replace(/\s/g, '-')] = o;
    return acc;
  }, {} as Record<string, typeof doctypes[number]>);

  const output = resolve(process.cwd(), 'packages/data/json/doctypes.json');
  await outputJson(output, data, { replacer: clean });

  return { result: doctypes.length };
};
