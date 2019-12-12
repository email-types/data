import { EOL } from 'os';
import { resolve, join } from 'path';
import { outputFile } from 'fs-extra';

type Options = {
  clean?: boolean;
  space?: number;
};

const jsonDist = resolve(process.cwd(), 'packages/data/json');

export const writeToJson = async (
  output: string,
  data: object,
  options: Options = {},
): Promise<void> => {
  const { clean = true, space = 0 } = options;
  const replacer = clean
    ? (_: string, value: unknown): unknown => {
        if (value === null || value === '' || value === [] || value === {}) {
          return undefined;
        }
        return value;
      }
    : undefined;

  const content = JSON.stringify(data, replacer, space).replace(/\n/g, EOL);
  await outputFile(join(jsonDist, output), `${content}${EOL}`);
};
