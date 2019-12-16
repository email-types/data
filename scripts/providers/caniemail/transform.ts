import { ProviderTransformer } from '../../utils';
import { RawData, ResolvedData } from './config';

export const transform: ProviderTransformer<RawData, ResolvedData> = async (
  data,
) => {
  return {
    title: data.title || '',
    description: data.description || '',
    categories: [data.category.toUpperCase()] as ResolvedData['categories'],
    spec: '',
    links: data.links || {},
    bugs: [],
    stats: data.stats,
    notes: data.notes || '',
    notesByNum: data.notes_by_num || {},
  };
};
