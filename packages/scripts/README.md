<div align="center">

# Email Types Scripts

Scripts used to manage the @email-types monorepo.

_this package is not published_

</div>

---

| Scripts                       | Description                                                                 |
| ----------------------------- | --------------------------------------------------------------------------- |
| [**build**](#build)           | All tasks that should be run during the build process.                      |
| [**prerelease**](#prerelease) | All tasks that should be run after `build` but prior to releasing packages. |

## Build

```sh
yarn build
```

**Tasks**

- Transfers data from `mdn-data` to the `@email-types/data` package, reducing
  overall package size since we include only what's needed.

## Prerelease

```sh
yarn prerelease
```

**Tasks**

- Automatically removes empty `*.js` files from the `@email-types/data` dist,
  reducing overall package size.
