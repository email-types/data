[emotion]: https://github.com/emotion-js/emotion
[stylis]: https://github.com/thysultan/stylis.js
[msotype]:
  https://github.com/email-types/email-types/tree/master/packages/msotype

# Stylis Plugin MSO (Prefix)

A [Stylis][stylis] plugin that adds support for the `mso-*` CSS vendor prefix.

- Prevents a leading `-` from being added. So you'll get `mso-*` instead of
  `-mso-*`.
- Automatically adds the `mso-*` prefix and the `*-alt` postfix for all
  Microsoft Office alternative CSS properties. See [msotype][msotype].
- Works with CSS-in-JS libraries like [EmotionJs][emotion].

## Install

```sh
yarn add @email-types/stylis-plugin-mso
```

## Usage

### Stylis Usage

```ts
import stylis from 'stylis';
import { plugin } from '@email-types/stylis-plugin-mso';

stylie.use(plugin);

stylis('.foobar', `{ color: tomato; }`);
// => .foobar { mso-color-alt:tomato; color:tomato; }
```

### Automatic Vendor Prefixes

By default, the `mso-` prefix and the `-alt` postfix is automatically applied to
any Microsoft Office alternative CSS property used. You can disable able this by
setting the `prefix` option to `false` when creating an instance of the plugin.

```ts
import stylis from 'stylis';
import { createPlugin } from '@email-types/stylis-plugin-mso';

const plugin = createPlugin({ prefix: false });
stylie.use(plugin);

stylis('.foobar', `{ color: tomato; }`);
// => .foobar { color:tomato; }
```

### Using with EmotionJs

You use with [EmotionJs'][emotion], you'll need to add the `<CacheProvider />`
to the top of your app. Note that when multiple `<CacheProvider />`'s are used,
all of your styles will be parsed twice. See more at
[@emotion/cache](https://github.com/emotion-js/emotion/tree/master/packages/cache).

```tsx
import msoPrefixPlugin from '@email-types/stylis-plugin-mso';
import { CacheProvider } from '@emotion/core';

const cache = createCache({
  stylisPlugins: [msoPrefixPlugin],
});

const App = () => (
  <CacheProvider value={cache}>
    <MyRoot />
  </CacheProvider>
);
```

## API

... todo
