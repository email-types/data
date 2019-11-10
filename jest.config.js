module.exports = {
  collectCoverageFrom: ['**/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/test/',
    // whatever
    '/packages/scripts/src/utils/format.ts',
    '/packages/scripts/src/utils/log.ts',
  ],
  coverageThreshold: {
    global: {
      statements: 0,
      branches: 0,
      functions: 0,
      lines: 0,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'node'],
  moduleNameMapper: {
    '@email-types/(.+)$': '<rootDir>/packages/$1',
  },
  roots: ['<rootDir>/packages'],
  snapshotSerializers: ['jest-emotion'],
};
