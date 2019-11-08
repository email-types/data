import { EOL } from 'os';
import { MSOProperty, features } from '@email-types/data/mso';
import { is, log } from '../utils';

export const createComment = (
  key: string,
  property: MSOProperty,
): string | null => {
  const rows: string[] = [];

  if (is.notUndef(property.description) && is.string(property.description)) {
    rows.push(property.description, '');
  }

  rows.push(`| Inherited | &vert; | Initial |`);
  rows.push('| --------- | -- | ------------- |');

  const tableRow: string[] = [];

  if (is.notUndef(property.inherited)) {
    tableRow.push(`\`${property.inherited}\` | &vert; |`);
  } else {
    tableRow.push('`unknown` | &vert; |');
  }

  if (is.string(property.initial)) {
    tableRow.push(`\`${property.initial}\` |`);
  } else {
    tableRow.push('`n/a` |');
  }

  rows.push(tableRow.join(''), '');

  if (is.notUndef(property.features) && property.features.length > 0) {
    const links = property.features
      .map((feature) => {
        const name = feature.toLowerCase().replace(/\s+/g, '-');
        const data = features[name];

        if (is.notUndef(data)) {
          return `[\`${data.title}\`](${data.url})`;
        }
        log.warn(`Could not find '${feature}' feature for ${key}`);
        return undefined;
      })
      .filter(Boolean);

    if (links.length > 0) {
      rows.push(`@see ${links.join(', ')}`);
    }
  }

  if (rows[rows.length - 1] === '') {
    rows.pop();
  }

  return rows.length > 0
    ? `/**${EOL} * ${rows.join(`${EOL} * `)} ${EOL} */`
    : null;
};
