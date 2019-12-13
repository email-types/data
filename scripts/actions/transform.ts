import { join } from 'path';
import { getProvider, log } from '../utils';
import { readdir, outputJson } from '../utils/fs';
import { Config, ProviderName } from '../utils/types';

type Results = {
  data: any;
  warnings: string[];
};

export const transform = async (
  name: ProviderName,
  config: Config,
): Promise<Results> => {
  const provider = getProvider(name);

  const results: Results = {
    data: {},
    warnings: [],
  };

  const filenames = await readdir(config.dataDist, config.transformFilter);
  const transformer = await provider.transform();

  log.info('Transforming features ...');
  await Promise.all(
    filenames.map(async (filename) => {
      const src = join(config.dataDist, filename);
      const data = await transformer(src);
      // const { warnings } = validate(feature);

      // if (warnings.length > 0) {
      //   results.warnings.push([`  ${filename}`, warnings.join(', ')]);
      // }

      const output = join(
        config.transformDist,
        filename.replace('.md', '.json'),
      );
      await outputJson(output, data);

      const name = filename.replace('.md', '');
      results.data[name] = data;
    }),
  );

  log.info(`Transformed ${Object.keys(results.data).length} files`);
  return results;
};
