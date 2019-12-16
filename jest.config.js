module.exports = {
  collectCoverageFrom: ['packages/*/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/dist/', '/test/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  moduleNameMapper: {
    '@email-types/(.+)$': '<rootDir>/packages/$1',
  },
  roots: ['<rootDir>/packages'],
};
