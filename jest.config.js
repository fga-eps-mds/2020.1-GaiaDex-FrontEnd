/* eslint-disable max-len */
/*
 * For a detailed explanation regarding each configuration property, visit: */

module.exports = {
  preset: 'jest-expo-enzyme',
  moduleFileExtensions: ['js', 'jsx'],
  setupFilesAfterEnv: ['jest-enzyme'],
  testEnvironment: 'enzyme',
  testMatch: ['**/__tests__/**/*.test.*js'],
  collectCoverage: true,
  testResultsProcessor: 'jest-sonar-reporter',
  coveragePathIgnorePatterns: ['/node_modules/', '/__tests__/'],
};
