const extensions = ['.ts', '.js', '.jsx', '.json'];

module.exports = {
  root: true,
  extends: ['@postmates', 'prettier'],
  plugins: ['import', 'prettier'],
  env: { node: true },
  settings: {
    'import/extensions': extensions,
    'import/resolver': {
      node: { extensions },
    },
  },
  rules: {
    'no-console': 0,
    'no-use-before-define': 0,

    // prettier
    'prettier/prettier': 2,

    // typescript
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-use-before-define': 0,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // prefer consistency
        '@typescript-eslint/no-inferrable-types': 0,
        '@typescript-eslint/explicit-function-return-type': 2,
      },
    },
    {
      files: ['*.test.ts'],
      extends: ['plugin:jest/recommended'],
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
        'jest/prefer-to-be-null': 2,
        'jest/prefer-to-be-undefined': 2,
        'jest/prefer-to-have-length': 2,
      },
    },
  ],
};
