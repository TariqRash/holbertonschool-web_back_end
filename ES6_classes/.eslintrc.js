module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-underscore-dangle': 0,
    'import/extensions': ['error', 'always', {
      js: 'never',
    }],
    'class-methods-use-this': 0,
    'max-classes-per-file': 0,
  },
};
