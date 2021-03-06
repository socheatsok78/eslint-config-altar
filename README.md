# Tasty Eslint and Prettier Setup for Vue

These are my settings for ESLint and Prettier for VueJS

[![Download](https://img.shields.io/npm/dm/eslint-config-altar.svg)](https://www.npmjs.com/package/eslint-config-altar)
[![Release](https://img.shields.io/npm/v/eslint-config-altar/latest.svg)](https://www.npmjs.com/package/eslint-config-altar)
[![License](https://img.shields.io/github/license/socheatsok78/eslint-config-altar.svg)](LICENSE)

You might like them - or you might not. Don't worry you can always change them.

## What it does

-   Lints JavaScript based on the latest standards
-   Fixes issues and formatting errors with Prettier
-   Lints + Fixes inside of `<template>` script tags
-   Lints + Fixes Vue via [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)
-   You can see all the [rules here](https://github.com/socheatsok78/eslint-config-altar/blob/master/.eslintrc.js) - these generally abide by the code written in my courses. You are very welcome to overwrite any of these settings, or just fork the entire thing to create your own.

## Installing

You can use eslint globally and/or locally per project.

It's usually best to install this locally once per project, that way you can have project specific settings as well as sync those settings with others working on your project via git.

I also install globally so that any project or rogue JS file I write will have linting and formatting applied without having to go through the setup. You might disagree and that is okay, just don't do it then 😃.

## Local / Per Project Install

1. If you don't already have a `package.json` file, create one with `npm init`.

2. Then we need to install everything needed by the config:

```
npx install-peerdeps --dev eslint-config-altar
```

3. You can see in your package.json there are now a big list of devDependencies.

4. Create a `.eslintrc` file in the root of your project's directory (it should live where package.json does). Your `.eslintrc` file should look like this:

```json
{
    "extends": ["altar"]
}
```

Tip: You can alternatively put this object in your `package.json` under the property `"eslintConfig":`. This makes one less file in your project.

5. You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint --ext .js,.vue --ignore-path .gitignore .",
  "lint:fix": "npm run lint -- --fix"
},
```

6. Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`. You probably want your editor to do this though.

## Global Install

1. First install everything needed:

```
npx install-peerdeps --global eslint-config-altar
```

(**note:** npx is not a spelling mistake of **npm**. `npx` comes with when `node` and `npm` are installed and makes script running easier 😃)

2. Then you need to make a global `.eslintrc` file:

ESLint will look for one in your home directory

-   `~/.eslintrc` for mac
-   `C:\Users\username\.eslintrc` for windows

In your `.eslintrc` file, it should look like this:

```json
{
    "extends": ["altar"]
}
```

3. To use from the CLI, you can now run `eslint .` or configure your editor as we show next.

## Settings

If you'd like to overwrite eslint or prettier settings, you can add the rules in your `.eslintrc` file. The [ESLint rules](https://eslint.org/docs/rules/) go directly under `"rules"` while [prettier options](https://prettier.io/docs/en/options.html) go under `"prettier/prettier"`. Note that prettier rules overwrite anything in my config (trailing comma, and single quote), so you'll need to include those as well.

```js
{
  "extends": [
    "altar"
  ],
  "rules": {
    "no-console": 2,
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120,
        "tabWidth": 8,
      }
    ]
  }
}
```

## With VS Code

You should read this entire thing. Serious!

Once you have done one, or both, of the above installs. You probably want your editor to lint and fix for you. Here are the instructions for VS Code:

1. Install the [ESLint package](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. Now we need to setup some VS Code settings via `Code/File` → `Preferences` → `Settings`. It's easier to enter these settings while editing the `settings.json` file, so click the `{}` icon in the top right corner:

```js
  // These are all my auto-save configs
"editor.formatOnSave": true,
// turn it off for JS and JSX, we will do this via eslint
"[javascript]": {
  "editor.formatOnSave": false
},
"[javascriptreact]": {
  "editor.formatOnSave": false
},
"[vue]": {
  "editor.formatOnSave": false
},
// tell the ESLint plugin to run on save
"eslint.autoFixOnSave": true,
"eslint.validate": [
    "javascript",
    "javascriptreact",
    { "language": "vue", "autoFix": true }
]
// Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
"prettier.tabWidth": 4,
"prettier.useTabs": false,
"prettier.disableLanguages": ["javascript", "javascriptreact", "vue"],
// Override VETUR tab site to 4
"vetur.format.options.tabSize": 4,
```

## `.editorconfig`

```
[*.vue]
indent_size = 4
```

## 🚫💩 Git Hooks

Fix your code before commiting, providing coverage to prevent bad commit.

Install the following packages:

```sh
npm install --save-dev husky lint-staged
```

Add this configuration to your `package.json`

```json
"husky": {
  "hooks": {
    "pre-commit": "node_modules/.bin/lint-staged"
  }
},
"lint-staged": {
  "*.js": [
    "npm run lint -- --fix",
    "git add"
  ],
  "*.vue": [
    "npm run lint -- --fix",
    "git add"
  ]
}
```

@see `https://github.com/typicode/husky#readme`  
@see `https://github.com/okonet/lint-staged#readme`

## 🤬🤬🤬🤬 ITS NOT WORKING

start fresh. Sometimes global modules can goof you up. This will remove them all.

```
npm remove --global eslint-config-altar babel-eslint eslint eslint-config-prettier eslint-config-airbnb eslint-plugin-html eslint-plugin-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react prettier eslint-plugin-react-hooks
```

To do the above for local, omit the `--global` flag.

Then if you are using a local install, remove your `package-lock.json` file and delete the `node_modules/` directory.

Then follow the above instructions again.

## Forked from Wesbos configuration

@see `https://github.com/wesbos/eslint-config-wesbos#readme`
