module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'vue'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-useless-catch': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'vue/multi-word-component-names': 'off',
  },
};
