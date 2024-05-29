import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";


export default [
  {languageOptions: { globals: {...globals.browser, ...globals.node} }, rules: {
    "@typescript-eslint/no-explicit-any": "off"
    }},
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
];
