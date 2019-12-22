import { EOL } from 'os';
import { outputFile } from 'fs-extra';
import { Package, getPackagePath, log } from '../utils';

type Dependency = {
  name: string;
  input: string;
  output: string;
  message: string;
};

const createTemplate = <T extends object = {}>(
  name: Dependency['name'],
  data: T,
): string => {
  const content = [
    '"use strict"',
    'exports.__esModule = true;',
    `exports.${name} = void 0;`,
    `const ${name} = ${JSON.stringify(data)};`,
    `exports.${name} = ${name};`,
  ];

  return content.join(`${EOL}${EOL}`);
};

const createTransport = (pkg: Package) => async (
  dep: Dependency,
): Promise<string> => {
  const mod = await import(`${dep.input}`);
  const output = getPackagePath(pkg, dep.output);
  const content = createTemplate(dep.name, mod.default || mod);

  await outputFile(output, content);
  return dep.message;
};

export const transfer = async (
  deps: Dependency[],
  pkg: Package = 'data',
): Promise<void> => {
  log.wait('Transferring package data dependencies...');

  const transport = createTransport(pkg);
  const results = await Promise.all(deps.map(transport));
  log.done(`Successfully transfered ${results.length} file(s)`);
};
