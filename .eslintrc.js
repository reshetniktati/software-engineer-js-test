module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    // 'eslint:recommended',
    'plugin:react/recommended',
    'standard',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {}
};
