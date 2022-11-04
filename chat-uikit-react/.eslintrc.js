module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'import'],
  settings: {
    typescript: {
      alwaysTryTypes: true,
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    // 'no-unused-vars': [
    //   'error',
    //   {
    //     varsIgnorePattern: '^[A-Z]',
    //   },
    // ],
    'import/no-unresolved': 'error',
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    // '@typescript-eslint/no-use-before-define': ['error'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    // "@typescript-eslint/explicit-function-return-type": [
    //   "error",
    //   {
    //     allowExpressions: true,
    //   },
    // ],
    // 'max-len': ['warn', { code: 80 }],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': [0],
  },
};
