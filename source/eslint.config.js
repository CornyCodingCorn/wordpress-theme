import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { globalIgnores } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";

export default tseslint.config([
	globalIgnores(["dist"]),
	stylistic.configs["disable-legacy"],
	{
		files: ["**/*.{ts,tsx}"],
		plugins: {
			"@stylistic": stylistic
		},
		extends: [
			js.configs.recommended,
			tseslint.configs.stylisticTypeChecked,
			{
				languageOptions: {
					parserOptions: {
						projectService: true,
						tsconfigRootDir: import.meta.dirname
					}
				}
			},
			reactHooks.configs["recommended-latest"],
			reactRefresh.configs.vite
		],
		rules: {
			"@stylistic/indent": ["error", "tab"],
			"@stylistic/semi": ["error", "always"],
			"@stylistic/quotes": ["error", "double"],

			"@stylistic/block-spacing": ["warn", "always"],
			"@stylistic/space-in-parens": ["warn", "always"],
			"@stylistic/space-before-blocks": ["warn", "always"],
			"@stylistic/space-infix-ops": ["warn", { "int32Hint": false }],
			"@stylistic/arrow-spacing": ["warn", { "before": true, "after": true }],
			"@stylistic/spaced-comment": ["warn", "always", { "exceptions": ["=", "-", "+"] }],
			"@stylistic/function-call-spacing": ["warn", "never"],
			"@stylistic/type-annotation-spacing": ["warn"],
			"@stylistic/key-spacing": ["warn"],
			"@stylistic/keyword-spacing": ["warn"],
			"@stylistic/comma-spacing": ["warn"],
			"@stylistic/type-generic-spacing": ["warn"],
			"@stylistic/switch-colon-spacing": ["warn"],
			"@stylistic/template-curly-spacing": ["warn", "always"],
			"@stylistic/rest-spread-spacing": ["warn"],
			"@stylistic/semi-spacing": ["warn"],
			"@stylistic/array-bracket-spacing": ["warn", "always"]
		},
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser
		}
	},
	{
		// Disable the disable eslint warning
		files: [""],
		lintOnSave: {
			reportUnusedDisableDirectives: false
		}
	}
]);
