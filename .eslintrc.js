module.exports = {
    env: {
        es6: true,
        node: true,
    },
    extends: [
        'airbnb-base',
        'prettier'
    ],
    plugins: ["prettier"],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 20,
        sourceType: 'module',
    },
    rules: {
        'linebreak-style': ['error', 'windows'],
        "prettier/prettier": "error",
        "class-methods-use-this": "off",
        "no-param-reassing": "off",
        "camelcase": "true",
        "no-unused-vars": ["error", { "argsIgnorePattern": "next" }],
    },
};
