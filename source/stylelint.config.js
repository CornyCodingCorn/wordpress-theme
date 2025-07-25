import stylelintPrettier from "stylelint-prettier";

/** @type {import("stylelint").Config} */
export default {
	plugins: [
		stylelintPrettier
	],
	extends: [
		"stylelint-prettier/recommended",
		"stylelint-config-standard",
		"stylelint-config-tailwindcss"
	],
	rules: {}
};