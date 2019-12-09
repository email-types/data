import {
  OneOfType,
  OptionalString,
  OneOfTypeOrNull,
  NullableString,
  createValidation,
} from '../utils/validations';

const names = [
  'HTML 5',
  'HTML 4.01 Strict',
  'HTML 4.01 Transitional',
  'XHTML 1.1',
  'XHTML 1.0 Strict',
  'XHTML 1.0 Transitional',
] as const;

const element = ['html', 'svg', 'math'] as const;

const keyword = ['public', 'system'] as const;

const schema = {
  name: OneOfType(names),
  description: OptionalString(),
  element: OneOfType(element),
  keyword: OneOfTypeOrNull(keyword),
  publicIdentifier: NullableString(),
  systemIdentifier: NullableString(),
};

export const validate = createValidation(schema);
