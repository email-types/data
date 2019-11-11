const isEsm = process.env.TARGET === 'esm';

module.exports = (api) => {
  const isDev = api.env('development');
  const isTest = api.env('test');

  const plugins = [
    '@babel/plugin-syntax-dynamic-import',
    isTest && ['babel-plugin-dynamic-import-node'],
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
        },
      ],
      ['@babel/preset-react', { development: isDev || isTest }],
      '@babel/preset-typescript',
    ],
  };
};
