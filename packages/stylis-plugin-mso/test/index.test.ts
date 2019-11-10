import stylis from 'stylis';
import plugin, { createPlugin, Plugin } from '../src';

const specs: Array<{
  name: string;
  sample: string;
  expected: string;
  prefix?: boolean;
}> = [
  {
    name: 'returns with mso prefix',
    sample: 'color: tomato;',
    expected: '{mso-color-alt:tomato;color:tomato;}',
    prefix: true,
  },
  {
    name: 'returns without mso prefix',
    sample: 'color: tomato;',
    expected: '{color:tomato;}',
    prefix: false,
  },
  {
    name: 'returns with a fixed mso prefix',
    sample: '-mso-color-alt: tomato;',
    expected: '{mso-color-alt:tomato;}',
  },
];

describe('stylis-plugin-mso', () => {
  specs.forEach((spec) => {
    it(spec.name, () => {
      let _plugin: Plugin = plugin;

      if (typeof spec.prefix === 'boolean') {
        stylis.set({ prefix: spec.prefix });

        _plugin = spec.prefix
          ? createPlugin()
          : createPlugin({ prefix: spec.prefix });
      }

      stylis.use(null)(_plugin);

      const result = stylis('', spec.sample);
      expect(result).toMatchSnapshot();
      expect(result).toEqual(spec.expected);
    });
  });
});
