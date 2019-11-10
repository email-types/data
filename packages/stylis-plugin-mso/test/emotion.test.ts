import renderer from 'react-test-renderer';
import createCache, { EmotionCache } from '@emotion/cache';
import { CacheProvider, jsx, css, SerializedStyles } from '@emotion/core';
import { matchers } from 'jest-emotion';
import plugin, { createPlugin, Plugin } from '../src';

expect.extend(matchers);

const specs: Array<{
  name: string;
  sample: SerializedStyles;
  expected: Record<string, string>;
  prefix?: boolean;
}> = [
  {
    name: 'returns with mso prefix',
    sample: css({ color: 'tomato' }),
    expected: {
      color: 'tomato',
      'mso-color-alt': 'tomato',
    },
    prefix: true,
  },
  {
    name: 'returns without mso prefix',
    sample: css({ color: 'tomato' }),
    expected: { color: 'tomato' },
    prefix: false,
  },
  {
    name: 'returns with mso prefix when using string literal',
    sample: css`
      color: tomato;
    `,
    expected: { color: 'tomato', 'mso-color-alt': 'tomato' },
  },
  {
    name: 'returns with a fixed mso prefix',
    sample: css({ MsoColorAlt: 'tomato' }),
    expected: { 'mso-color-alt': 'tomato' },
  },
  {
    name: 'returns with a fixed mso prefix when using an object',
    sample: css({ msoColorAlt: 'tomato' }),
    expected: { 'mso-color-alt': 'tomato' },
  },
  {
    name: 'returns with a fixed mso prefix when using string literal',
    sample: css`
      -mso-color-alt: tomato;
    `,
    expected: { 'mso-color-alt': 'tomato' },
  },
];

describe('stylis-plugin-mso', () => {
  specs.forEach((spec) => {
    it(spec.name, () => {
      let cache: EmotionCache;
      let _plugin: Plugin = plugin;

      if (typeof spec.prefix === 'boolean') {
        _plugin = spec.prefix
          ? createPlugin()
          : createPlugin({ prefix: spec.prefix });

        cache = createCache({
          stylisPlugins: [_plugin],
          prefix: spec.prefix,
        });
      } else {
        cache = createCache({
          stylisPlugins: [_plugin],
        });
      }

      const child = jsx('div', { css: spec.sample });
      const parent = jsx(CacheProvider, { value: cache }, child);
      const tree = renderer.create(parent).toJSON();

      expect(tree).toMatchSnapshot();
      Object.entries(spec.expected).forEach(([key, value]) => {
        expect(tree).toHaveStyleRule(key, value);
      });
    });
  });
});
