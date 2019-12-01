const extensions = ['.ts', '.tsx', '.js', '.jsx', '.json'];

module.exports = {
  root: true,
  extends: [
    '@postmates',
    'prettier',
    'prettier/react',
    'prettier/standard',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier'],
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
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // prefer consistency
        '@typescript-eslint/no-inferrable-types': 0,
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
        // jest
        'jest/prefer-to-be-null': 2,
        'jest/prefer-to-be-undefined': 2,
        'jest/prefer-to-have-length': 2,
      },
    },
  ],
};
