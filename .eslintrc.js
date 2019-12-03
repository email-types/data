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
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        // prefer consistency
        '@typescript-eslint/no-inferrable-types': 'off',
      },
    },
    {
      files: ['*.test.ts'],
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      plugins: ['jest'],
      env: { jest: true },
      rules: {
        '@typescript-eslint/no-empty-function': 'off',
      },
    },
    {
      files: ['scripts/**/*'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
