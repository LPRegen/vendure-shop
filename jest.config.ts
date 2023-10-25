import type { Config } from 'jest';

const config: Config = {
  rootDir: './',
  verbose: true,
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^.+\\.(css|scss)$': '<rootDir>/src/components/mocks/styleMock.js',
  },
};

export default config;
