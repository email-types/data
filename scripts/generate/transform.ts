import path from 'path';
import { readMd } from '../utils/fs';
import { Config } from '../utils/config';
import { Provider } from '../utils/provider';

export type TransformResults<T> = {
  name: string;
  data: T;
};

export const transform = async <T extends object>(
  filename: string,
  provider: Provider,
  config: Config,
): Promise<TransformResults<T>> => {
  const transformer = await provider.transform();
  const content = await readMd(path.join(config.dataDist, filename));
  const data = await transformer(content);

  return { data, name: filename.replace('.md', '') };
};
