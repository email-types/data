import { EOL } from 'os';
import prettier, { Options as PrettierOptions } from 'prettier';

type Options = PrettierOptions & {
  cwd?: string;
};

export const format: (
  output: string,
  opts?: Options,
) => Promise<string> = async (output, opts = {}) => {
  const { cwd = process.cwd(), ...rest } = opts;
  const config = await prettier.resolveConfig(cwd);

  const options: PrettierOptions = {
    parser: 'typescript',
    ...config,
    ...rest,
  };

  try {
    const pretty = prettier.format(output, options);
    return pretty.replace(/\n/g, EOL);
  } catch (error) {
    throw Error(error);
  }
};
