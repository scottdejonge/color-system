module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    '@vue/airbnb',
    'plugin:@hireupau/hu-vue/recommended',
  ],
  rules: {
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: true,
    }],
    'import/no-extraneous-dependencies': 'error',
    'no-console': 'error',
    'no-debugger': 'error',
    'no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0,
      maxEOF: 1,
    }],
    'no-restricted-globals': ['error',
      {
        name: 'fetch',
        message: 'use methods from utils/http.js',
      },
      {
        name: 'sessionStorage',
        message: 'use methods from utils/storage.js',
      },
    ],
    'no-restricted-imports': ['error', {
      patterns: [
        'lodash*',
        'moment*',
        'axios',
      ],
    }],
    'no-unused-vars': ['error', {
      vars: 'all',
      args: 'all',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: false,
    }],
    'vue/v-bind-style': ['error', 'longform'],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    }],
    'vue/v-on-style': ['error', 'longform'],
    'vue/script-indent': ['error', 2, {
      baseIndent: 1,
      switchCase: 1,
    }],
  },
  overrides: [{
    files: ['*.vue'],
    rules: {
      indent: 'off',
    },
  }],
  parserOptions: {
    parser: 'babel-eslint',
  },
};
