const extensions = ['.ts', '.js', '.jsx', '.json'];

module.exports = {
  root: true,
  extends: ['@postmates', 'prettier'],
  plugins: ['import', 'prettier'],
  env: { node: true },
  settings: {
    'import/extensions': extensions,
    'import/resolver': {
      node: { extensions: extensions },
    },
  },
  rules: {
    'no-console': 0,
    'no-param-reassign': [2, { props: false }],

    // prettier
    'prettier/prettier': 2,

    // typescript
    '@typescript-eslint/explicit-function-return-type': 0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 2,
      },
    },
    {
      files: ['*.test.ts'],
      plugins: ['jest'],
      env: {
        jest: true,
        node: true,
      },
      rules: {
        // import
        'import/no-extraneous-dependencies': 0,
        'import/no-unresolved': 0,

        // jest
        'jest/expect-expect': 2,
        'jest/no-disabled-tests': 2,
        'jest/no-focused-tests': 2,
        'jest/no-identical-title': 2,
        'jest/no-jest-import': 2,
        'jest/no-test-callback': 2,
        'jest/prefer-to-be-null': 2,
        'jest/prefer-to-be-undefined': 2,
        'jest/prefer-to-have-length': 2,
        'jest/valid-expect': 2,
      },
    },
  ],
};
