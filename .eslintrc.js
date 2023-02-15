module.exports = {
    extends: 'react-app',
    rules: {
        'eqeqeq': 'warn',
        'semi': ['error', 'always'],
        'comma-dangle': ['error', {
            'arrays': 'always-multiline',
            'objects': 'always-multiline',
            'imports': 'always-multiline',
            'exports': 'always-multiline',
            'functions': 'always-multiline',
        }],
        'default-case': [0, 'never'],
        'jsx-quotes': ['error', 'prefer-double'],
        'no-template-curly-in-string': 0,
        'no-console': "error",
        'no-mixed-operators': 0,
        'no-restricted-globals': 0,
        'no-unused-vars': "error",
        'import/no-anonymous-default-export': 0,
        'react-hooks/exhaustive-deps': [0],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 1,
        'react/react-in-jsx-scope': 0,
        'space-before-function-paren': 0,
    },
    "parserOptions": {
        "warnOnUnsupportedTypeScriptVersion": false
    },
}
