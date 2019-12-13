import { readFile } from 'fs-extra';
import { safeLoadFront } from 'yaml-front-matter';

export const transform = async (filepath: string): Promise<object> => {
  let data: any;
  try {
    const content = await readFile(filepath, 'utf8');
    data = await safeLoadFront(content);

    const feature = {
      title: data.title || '',
      description: data.description || '',
      categories: data.category,
      spec: '',
      links: data.links,
      bugs: [],
      stats: data.stats,
      notes: data.notes || '',
      notesByNum: data.notes_by_num || {},
      // TODO
      usagePercA: 0,
      usagePercY: 0,
    };

    return feature;
  } catch (err) {
    if (err.name === 'YAMLException') {
      const error = Error(err.name);
      error.message = `${err.reason} found at line ${err.mark.line} in ${filepath}`;
      throw error;
    }
    throw err;
  }
};
