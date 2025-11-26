import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    rules: {
      "no-unused-vars": "warn",
      semi: ["error", "always"],
    },
    extends: ["eslint:recommended"],
  },
]);
