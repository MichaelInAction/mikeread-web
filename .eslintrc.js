module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        'require': 'readonly',
        'it': 'readonly',
        'expect': 'readonly'
    },
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
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
        'sort-imports': [
            'warn',
            {
              'ignoreCase': true,
              'ignoreDeclarationSort': false,
              'ignoreMemberSort': true,
              'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single']
            }
        ],
        'no-unused-vars': [
            'off'
        ]
    }
};
