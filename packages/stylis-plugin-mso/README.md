[emotion]: https://github.com/emotion-js/emotion
[stylis]: https://github.com/thysultan/stylis.js
[msotype]:
  https://github.com/email-types/email-types/tree/master/packages/msotype

# MSO Stylis Plugin

A [Stylis][stylis] plugin that adds support for the `mso-` CSS vendor prefix. It
automatically adds the `mso-` prefix and `-alt` postfix for all Microsoft Office
alternative CSS properties (see [msotype][msotype]). It also prevents a leading
`-` from being added. So you'll get `mso-` instead of `-mso-`.

Install with yarn

```sh
yarn add stylis-plugin-mso
```

Or install with npm:

```sh
npm install stylis-plugin-mso
```

## Using with Stylis

```ts
import stylis from 'stylis';
import plugin from 'stylis-plugin-mso';

stylis.use(plugin);

stylis('.foobar', `{ color: tomato; }`);
// => .foobar { mso-color-alt:tomato; color:tomato; }
```

## Using with EmotionJs

To use with [EmotionJs][emotion], you'll need to add a `<CacheProvider />`. Note
that when multiple `<CacheProvider />` are used, all of your styles will be
parsed twice. So make sure to add this at the top of your app. See more at
[@emotion/cache](https://github.com/emotion-js/emotion/tree/master/packages/cache).

```tsx
import { CacheProvider } from '@emotion/core';
import plugin from 'stylis-plugin-mso';

const cache = createCache({
  stylisPlugins: [plugin],
});

const App = () => (
  <CacheProvider value={cache}>
    <MyRoot />
  </CacheProvider>
);
```

## Automatic Vendor Prefix

By default, the `mso-` prefix and `-alt` postfix are automatically applied to
all Microsoft Office alternative CSS properties. You can disable this by
creating an instance of the plugin and setting the `prefix` option to `false`.

```ts
import stylis from 'stylis';
import { createPlugin } from 'stylis-plugin-mso';

const plugin = createPlugin({ prefix: false });

stylis.set({ prefix: false });
stylis.use(plugin);

stylis('.foobar', `{ color: tomato; }`);
// => .foobar { color:tomato; }
```

## API

### createPlugin

```tsx
createPlugin(options?: object): StylisPlugin
```

**options**

- `prefix?: boolean`: Toggles automatic `mso` vendor prefixing. Default: `true`.
