module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: 'commonjs',
        targets: { node: 'current' },
        shippedProposals: true,
      },
    ],
    '@babel/preset-typescript',
  ],
};
