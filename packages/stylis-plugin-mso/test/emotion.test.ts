import renderer from 'react-test-renderer';
import createCache from '@emotion/cache';
import { CacheProvider, jsx, css, SerializedStyles } from '@emotion/core';
import { matchers } from 'jest-emotion';
import { createPlugin } from '../src';

expect.extend(matchers);

const render = (
  styles: SerializedStyles,
  prefix = true,
): renderer.ReactTestRendererJSON | null => {
  const cache = createCache({
    stylisPlugins: [createPlugin({ prefix })],
    prefix,
  });

  const child = jsx('div', { css: styles });
  const comp = jsx(CacheProvider, { value: cache }, child);

  return renderer.create(comp).toJSON();
};

describe('stylis-plugin-mso', () => {
  it('returns correct styles with mso prefix', () => {
    const tree = render(css({ paddingRight: 10 }));

    expect(tree).toHaveStyleRule('padding-right', '10px');
    expect(tree).toHaveStyleRule('mso-padding-right-alt', '10px');
    expect(tree).toMatchSnapshot();
  });

  it('returns correct styles without mso prefix', () => {
    const tree = render(css({ paddingLeft: 10 }), false);

    expect(tree).toHaveStyleRule('padding-left', '10px');
    expect(tree).not.toHaveStyleRule('mso-padding-left-alt', '10px');
    expect(tree).toMatchSnapshot();
  });

  it('returns correct styles with mso prefix when using string literal', () => {
    const tree = render(
      css`
        margin-left: 10px;
      `,
    );

    expect(tree).toHaveStyleRule('margin-left', '10px');
    expect(tree).toHaveStyleRule('mso-margin-left-alt', '10px');
    expect(tree).toMatchSnapshot();
  });
});
