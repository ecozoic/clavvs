module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['json', 'lcov'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  roots: ['src'],
  setupFiles: [
    '<rootDir>/jest/setup.js',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(js|jsx)$'
};
