module.exports = {
    "extends": [
        "airbnb",
        "plugin:vue/recommended",
        "prettier/vue"
    ],
    "plugins": [
        "prettier",
    ],
    "parserOptions": {
        "ecmaVersion": 2017,
        "ecmaFeatures": {
            "impliedStrict": true,
            "classes": true
        },
        "parser": "babel-eslint",
        "sourceType": "module"
    },
    "env": {
        "browser": true,
        "node": true,
        "jquery": true,
        "jest": true
    },
    "rules": {
        "arrow-body-style": [
            2,
            "as-needed"
        ],
        "comma-dangle": 0,
        "consistent-return": 0,
        "func-names": 0,
        "global-require": 1,
        "quotes": [
            2,
            "single",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],

        "import": 0,
        "import/extensions": 0,
        "import/no-extraneous-dependencies": 0,
        "import/prefer-default-export": 0,

        "no-debugger": 0,
        "no-alert": 0,
        "no-await-in-loop": 0,
        "no-return-assign": [
            "error",
            "except-parens"
        ],
        "no-restricted-syntax": [
            2,
            "ForInStatement",
            "LabeledStatement",
            "WithStatement"
        ],
        "no-unused-vars": [
            1,
            {
                "ignoreSiblings": true,
                "argsIgnorePattern": "res|next|^err"
            }
        ],
        "no-multi-assign": 1,
        "no-unused-expressions": [
            2,
            {
                "allowTaggedTemplates": true
            }
        ],
        "no-param-reassign": [
            2,
            {
                "props": false
            }
        ],
        "no-console": 0,
        "no-underscore-dangle": 0,
        "no-shadow": [
            2,
            {
                "hoist": "all",
                "allow": [
                    "resolve",
                    "reject",
                    "done",
                    "next",
                    "err",
                    "error"
                ]
            }
        ],
        "max-len": 0,
        "prefer-const": [
            "error",
            {
                "destructuring": "all",
            }
        ],
        "radix": 0,
        "space-before-function-paren": 0,

        /**
         * Prettier
         */
        "prettier/prettier": [
            "error",
            {
                "trailingComma": "es5",
                "singleQuote": true,
                "printWidth": 80,
            }
        ],

        "jsx-a11y/href-no-hash": "off",
        "jsx-a11y/anchor-is-valid": [
            "warn",
            {
                "aspects": [
                    "invalidHref"
                ]
            }
        ],

        /**
         * Vue ESLint Plugins
         */
        "vue/html-indent": [
            "error",
            2,
            {
                "attribute": 1,
                "baseIndent": 1,
                "closeBracket": 0,
                "alignAttributesVertically": true,
                "ignores": []
            }
        ],
        "vue/singleline-html-element-content-newline": "off",
        "vue/html-closing-bracket-newline": [
            "error",
            {
                "singleline": "never",
                "multiline": "always"
            }
        ]
    }
}
