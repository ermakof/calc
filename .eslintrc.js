module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  "overrides": [
    {
      "files": ["webpack.config.js"],
      "rules": {
        "@typescript-eslint/no-var-requires": ["off"]
      }
    }
  ]
};
