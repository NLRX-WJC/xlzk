module.exports = {
  parser: "@typescript-eslint/parser",
  env: { es6: true, browser: true },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["eslint-config-alloy/react", "plugin:prettier/recommended"],
  plugins: ["@typescript-eslint"],
  rules: {
    complexity: ["off"],
    "no-throw-literal": ["off"],
    "no-nested-ternary": "off",
    "react/display-name": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@tencent/tea-i18n/no-bare-zh-in-js": "off",
    "@tencent/tea-i18n/no-bare-zh-in-jsx": "off",
    "@typescript-eslint/no-this-alias": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        custom: {
          regex: "^I[A-Z]",
          match: true,
        },
      },
    ],
    "@typescript-eslint/class-literal-property-style": "off",
    "linebreak-style": [0, "error", "windows"],
  },
};
