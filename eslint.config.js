import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  // Ignore build output
  {
    ignores: ["dist"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // Base JS recommended rules
      ...js.configs.recommended.rules,

      // React & JSX rules
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,

      // React hooks rules
      ...reactHooks.configs.recommended.rules,

      // Custom overrides
      "react/jsx-no-target-blank": "off", // Allow target="_blank" without rel="noopener"
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
];
