import {
  OneOfType,
  OptionalString,
  OneOfTypeOrNull,
  NullableString,
} from '../utils/validations';

const names = [
  'HTML 5',
  'HTML 4.01 Strict',
  'HTML 4.01 Transitional',
  'XHTML 1.1',
  'XHTML 1.0 Strict',
  'XHTML 1.0 Transitional',
] as const;

const elements = ['html', 'svg', 'math'] as const;

const keywords = ['public', 'system'] as const;

export const scheme = {
  name: OneOfType(names),
  description: OptionalString(),
  element: OneOfType(elements),
  keyword: OneOfTypeOrNull(keywords),
  publicIdentifier: NullableString(),
  systemIdentifier: NullableString(),
};
