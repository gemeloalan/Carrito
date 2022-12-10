module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    'ecmaver sion': 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
};
