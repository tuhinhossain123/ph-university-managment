import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,ts}"] },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, 
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      "no-unused-vars": "error",
      "prefer-const": "error",
      "no-unused-expressions": "error",
      "no-console": "warn",
      "no-undef": "error",
    },
  },

  {
    ignores: [".node_modules/*", "dist/**"],
  },
];
