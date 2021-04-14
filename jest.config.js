module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<roodDir>/src/**/*.ts>'],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
