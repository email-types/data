# Email Types Scripts

Scripts used across @email-types.

## Tasks

```sh
yarn tasks <taskname> [options]
```

**Tasknames**

- [transfer](#transfer) (default)

**Options**

```sh
-c --cwd   Current working directory (default: process.cwd())
-h --help  Shows this help message
```

## Transfer Task

```sh
yarn tasks transfer
```

Transfers data from `mdn-data` to the `@email-types/data` package. This reduces
overall file size since we include only what we need.
