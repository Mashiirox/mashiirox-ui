module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['alloy', 'alloy/react', 'alloy/typescript', 'plugin:prettier/recommended', 'plugin:storybook/recommended'],
  plugins: ['react', '@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  globals: {
    window: true
  },
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/consistent-type-definitions': 0,
    '@typescript-eslint/default-param-last': 2,
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/lines-between-class-members': ['warn', 'always', {
      exceptAfterOverload: true
    }],
    '@typescript-eslint/no-dupe-class-members': 2,
    '@typescript-eslint/no-empty-function': 1,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-unnecessary-condition': 1,
    '@typescript-eslint/no-unsafe-assignment': 1,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/no-use-before-define': 2,
    'react/destructuring-assignment': 1,
    'react/no-unstable-nested-components': 0,
    'guard-for-in': 0,
    'no-console': 1,
    'no-nested-ternary': 1,
    'prefer-const': 2,
    'radix': [2, 'as-needed']
  },
  overrides: [{
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      'no-undef': 'off'
    }
  }],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    project: ['tsconfig.json']
  },
  root: true,
  settings: {
    react: {
      version: 'detect'
    }
  }
};