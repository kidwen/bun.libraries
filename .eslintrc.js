module.exports = {
    env: { browser: true, amd: true, node: true },
    ignorePatterns: [
        ".eslintrc.js",
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
        "ecmaFeatures": {
            "modules": true
        },
        "project": [
            "tsconfig.eslint.json"
        ],
        "sourceType": "module",
        "ecmaVersion": 'latest'
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    root: true
}
