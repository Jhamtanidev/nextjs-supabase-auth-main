/* eslint-disable prettier/prettier */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    // eslint-disable-next-line prettier/prettier
    },
    "extends":[ "acme",
    "next",
    'next/core-web-vitals',
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier"],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-shadow": "warn",
    "no-unused-vars": "warn",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        "controlComponents": ["Field"],
        "depth": 3
      }
    ],
    "react-hooks/exhaustive-deps": "warn",
    "react/function-component-definition": "off",
    "react/jsx-no-bind": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off"
    }
}
