import { readMd } from '../../utils/fs';

type Data = {
  category?: 'css' | 'html';
  description?: string;
  keywords?: string;
  last_test_date?: string;
  links?: Record<string, string>;
  notes?: string;
  notes_by_num?: Record<string, string>;
  stats: {};
  test_results_url?: string;
  test_url?: string;
  title?: string;
};

export const transform = async (filepath: string): Promise<object> => {
  const data = await readMd<Data>(filepath);

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
  };

  return feature;
};
