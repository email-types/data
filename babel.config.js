const isEsm = process.env.TARGET === 'esm';

module.exports = (api) => {
  const isDev = api.env('development');
  const isTest = api.env('test');

  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    isTest && ['babel-plugin-dynamic-import-node'],
    isEsm && [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        helpers: true,
        regenerator: true,
        useESModules: api.caller(
          (caller) => !!(caller && caller.supportsStaticESM),
        ),
      },
    ],
  ].filter(Boolean);

  return {
    plugins,
    presets: [
      [
        '@babel/preset-env',
        {
          loose: true,
          modules: isEsm ? false : 'commonjs',
          targets: isEsm ? { esmodules: true } : { node: 'current' },
          shippedProposals: true,
          exclude: ['transform-typeof-symbol'],
        },
      ],
      ['@babel/preset-react', { development: isDev || isTest }],
      '@babel/preset-typescript',
    ],
  };
};
