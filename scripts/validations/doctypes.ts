import { doctypes } from '../../packages/data/dist/html/doctypes';
import { writeToJson } from '../utils/write';

type Result = { result: number };

const toKebabCase = (name: string): string =>
  name.toLowerCase().replace(/\s/g, '-');

export default async (): Promise<Result> => {
  const data = doctypes.reduce((acc, o) => {
    acc[toKebabCase(o.name)] = o;
    return acc;
  }, {} as Record<string, typeof doctypes[number]>);

  await writeToJson('html/doctypes.json', data);

  return { result: doctypes.length };
};
