export type RawData = {
  category: 'css' | 'html';
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

type Category = 'HTML' | 'HTML4' | 'HTML5' | 'CSS' | 'CSS2' | 'CSS3' | 'DOM';

export type ResolvedData = {
  title: string;
  description: string;
  categories: Category[];
  spec: string;
  links: Record<string, string>;
  bugs: { description: string }[];
  stats: {};
  notes: string;
  notesByNum: Record<string, string>;
};

export const config = {
  dataUrl: 'https://github.com/hteumeuleu/caniemail/trunk/_features',
  dataDist: 'markdown',
  transformDist: 'json',
  transformIgnore: ['_template'],
};
