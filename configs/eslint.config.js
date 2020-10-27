module.exports = {
  'env': {
    'browser': true,
    'es2020': true,
    'node': true
  },
  settings: {
    react: {
      version: 'detect',
    }
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'eslint-plugin-react-hooks',
  ],
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'max-len': [
      'error',
      {
        tabWidth: 2,
        code: 120,
        ignoreComments: true,
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'no-case-declaration': 'off',
    'object-curly-spacing': ['error', 'never'],
    'newline-before-return': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': ['error', { 'functions': false }],
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'comma',
        'requireLast': true
      },
      singleline: {
        delimiter: 'comma',
        requireLast: false
      }
    }],
  }
};
