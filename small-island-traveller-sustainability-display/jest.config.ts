/* eslint-disable */
export default {
  displayName: 'small-island-traveller-sustainability-display',
  preset: '../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory:
    '../coverage/small-island-traveller-sustainability-display',
};
