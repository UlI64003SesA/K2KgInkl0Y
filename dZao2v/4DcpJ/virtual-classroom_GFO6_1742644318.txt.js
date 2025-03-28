// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
  ignorePatterns: ["apps/**", "packages/**"],
  extends: ["@repo/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
