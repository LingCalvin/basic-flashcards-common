module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc'],
  rules: {
    // tsdoc
    'tsdoc/syntax': 'warn',

    // Possible Errors
    'no-console': 'warn',

    // Best Practices
    'no-else-return': 'error',
    'no-eval': 'error',
    'no-eq-null': 'warn',
    'no-extend-native': 'error',
    'no-implied-eval': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'warn',
    'no-multi-spaces': 'warn',
    'no-new': 'warn',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-param-reassign': 'warn',
    'no-proto': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'warn',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'warn',
    'no-throw-literal': 'error',
    'no-unused-expressions': 'warn',
    'no-useless-call': 'warn',
    'no-warning-comments': 'warn',
    'prefer-promise-reject-errors': 'error',

    // Stylistic Issues
    'no-multiple-empty-lines': 'warn',
    'no-nested-ternary': 'warn',
    'no-unneeded-ternary': 'warn',
    'prefer-exponentiation-operator': 'warn',
    'prefer-object-spread': 'warn',

    // ECMAScript 6
    'no-duplicate-imports': 'error',
    'no-var': 'error',
    'object-shorthand': 'warn',
    'prefer-const': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-spread': 'warn',
    'prefer-template': 'warn',
    'sort-imports': 'warn',
  },
};
