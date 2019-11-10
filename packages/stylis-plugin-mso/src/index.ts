import { alternatives } from '@email-types/data/mso';

export type Plugin = (context: number, content: string) => string | void;

const properties = Object.keys(alternatives).reduce<Record<string, string>>(
  (result, property) => {
    // split the mso alt property to get the matched css style
    // eg. `mso-line-height-alt` becomes `line-height`.
    const [, name] = property.split(/mso-|-alt/);
    result[name] = property;
    return result;
  },
  {},
);

export const createPlugin = (
  options: { prefix: boolean } = { prefix: true },
): Plugin => {
  const plugin: Plugin = (context, content) => {
    // only run on a property declaration
    if (context === 1) {
      if (typeof options.prefix === 'boolean' && options.prefix !== false) {
        const [key, value] = content.trim().split(':');
        const property = properties[key];
        if (property) {
          return `${property}:${value};${content}`;
        }
      }

      // always fix the prefix
      return content.replace(/^-mso-/, 'mso-');
    }
  };

  return plugin;
};

export default createPlugin({ prefix: true });
