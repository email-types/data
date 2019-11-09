// TODO: make this import better
import { alternatives } from '@email-types/data/dist/mso/data/alternatives';

// TODO: More test
// TODO: Finish docmentation

type Plugin = (context: number, content: string) => string | void;

const msoPattern = /^-mso-/;
const msoAltPattern = /mso-|-alt+(?![^(]+\))/g;
const cssPropertyPattern = /:+(?![^(]+\))/g;

const properties = Object.keys(alternatives).reduce<Record<string, string>>(
  (result, property) => {
    const [, name] = property.split(msoAltPattern);
    result[name] = property;
    return result;
  },
  {},
);

export const createPlugin = (options: { prefix?: boolean } = {}): Plugin => {
  const plugin: Plugin = (context, content) => {
    // only run on a property declaration
    if (context === 1) {
      if (typeof options.prefix === 'boolean' && options.prefix !== false) {
        const values = content.trim().split(cssPropertyPattern);
        const [key, value] = values;
        const prefixKey = properties[key];
        if (prefixKey) {
          return `${prefixKey}:${value};${content}`;
        }
      }

      // always fix the prefix
      return content.replace(msoPattern, 'mso-');
    }
  };

  return plugin;
};

export const plugin = createPlugin({ prefix: true });
export default plugin;
