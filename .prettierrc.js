module.exports = {
  arrowParens: 'always',
  printWidth: 80,
  proseWrap: 'always',
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  overrides: [
    {
      files: '*.d.ts',
      options: {
        printWidth: 120,
        parser: 'typescript',
      },
    },
  ],
};
