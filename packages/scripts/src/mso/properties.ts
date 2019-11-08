/* eslint-disable import/no-mutable-exports */
import { properties as rawProperties } from '@email-types/data/mso';
import { toPascalCase } from '../utils';
import { parse, AnyDataType } from './parser';
import { createComment } from './comment';
import { Category, DataType } from './constants';

export interface Property {
  key: string;
  name: string;
  types: AnyDataType[];
  export: boolean;
  hasLength: boolean;
  interface?: Category;
  comment?: string | null;
}

export let getProperties = (): Property[] => {
  const entries = Object.entries(rawProperties).sort();
  const properties = entries.map(([key, value]) => {
    const types = parse(value.syntax);

    const property: Property = {
      key,
      types,
      export: true,
      name: `${toPascalCase(key)}Property`,
      comment: createComment(key, value),
      hasLength: types.some((type) => type.type === DataType.Length),
    };

    if (/mso-ansi/gi.test(key)) {
      property.interface = 'AnsiProperties';
    } else if (/mso-ascii/gi.test(key)) {
      property.interface = 'AsciiProperties';
    } else if (/mso-bidi/gi.test(key)) {
      property.interface = 'BidiProperties';
    } else if (/mso-fareast/gi.test(key)) {
      property.interface = 'FareastProperties';
    } else if (/mso-panose/gi.test(key)) {
      property.interface = 'PanoseProperties';
    } else if (key.endsWith('alt')) {
      property.interface = 'AlternativeProperties';
    } else {
      property.interface = 'StandardProperties';
    }

    return property;
  });

  // cache
  getProperties = (): Property[] => properties;

  return properties;
};
