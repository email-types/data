import { TransformResults } from './transform';
import { Provider } from '../utils/provider';

export const validate = async <T extends object>(
  provider: Provider,
  data: TransformResults<T>,
): Promise<string> => {
  const validator = await provider.validate();
  const warning = validator(data.data);

  if (warning.length === 0) return '';
  return `${data.name}: ${warning.join(', ')}`;
};
