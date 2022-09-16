module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "import", "unused-imports"],
  env: {
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "import/order": [
      1,
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: false,
        },
      },
    ],
    "import/newline-after-import": [1],
    "import/no-useless-path-segments": [
      "error",
      {
        noUselessIndex: true,
      },
    ],
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "prettier/prettier": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-empty-function": "warn",
    "unused-imports/no-unused-imports": "error",
    "import/no-unresolved": ["error", { ignore: ["^@", "^glob:"] }],
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "no-console": [
      1,
      {
        allow: ["warn", "error"],
      },
    ],
    "no-empty-pattern": "off",
    "padding-line-between-statements": [
      "error",
      {
        blankLine: "always",
        prev: "*",
        next: ["export"],
      },
      {
        blankLine: "any",
        prev: ["export"],
        next: ["export"],
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.ts"],
      extends: ["plugin:@typescript-eslint/recommended"],
    },
  ],
};
