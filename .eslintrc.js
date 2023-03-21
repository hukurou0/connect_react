module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'prettier'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'unused-imports'
  ],
  ignorePatterns: ['build'],
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ["error"],
    'import/prefer-default-export': 'off', 
    '@typescript-eslint/no-unused-vars': 'off', 
    'unused-imports/no-unused-imports': 'error',
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-array-index-key": "off",
    "indent": ["error", 2],
    "no-nested-ternary": "off",
    'unused-imports/no-unused-vars': [ 
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'no-param-reassign': [2, { props: false }],
    'import/extensions': [
      'error',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/react-in-jsx-scope': 'off', 
    'react/prop-types': 'off', 
    'no-void': [
      'error',
      {
        allowAsStatement: true, 
      },
    ],
  },
  settings: {
    'import/resolver': { 
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  }
}
