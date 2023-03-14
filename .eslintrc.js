module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'next/core-web-vitals',
    "plugin:import/warnings",
    'prettier'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off'
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
    project: ["./tsconfig.json"]
  },
  plugins: [
    '@typescript-eslint'
  ],
};
