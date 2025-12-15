import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Utility scripts (CommonJS, not part of the app)
    "scripts/**",
    "PR-DIFFS/**",
  ]),
  // Custom rule overrides
  {
    linterOptions: {
      reportUnusedDisableDirectives: "off",
    },
    rules: {
      // Downgrade no-explicit-any to warning (too many legitimate uses in data files)
      "@typescript-eslint/no-explicit-any": "warn",
      // Downgrade no-empty-object-type
      "@typescript-eslint/no-empty-object-type": "warn",
      // Core react-hooks rules
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      // Disable React Compiler rules (from react-hooks 7.0+, too strict for existing codebase)
      "react-hooks/static-components": "off",
      "react-hooks/use-memo": "off",
      "react-hooks/component-hook-factories": "off",
      "react-hooks/preserve-manual-memoization": "off",
      "react-hooks/incompatible-library": "off",
      "react-hooks/error-boundaries": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/purity": "off",
      "react-hooks/refs": "off",
      "react-hooks/immutability": "off",
      "react-hooks/unsupported-syntax": "off",
    },
  },
]);

export default eslintConfig;