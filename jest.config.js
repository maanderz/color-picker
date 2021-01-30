module.exports = {
	preset: '@vue/cli-plugin-unit-jest',
	moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
	verbose: true,
	testURL: 'http://localhost/',
	transform: {
		'^.+\\.vue$': 'vue-jest',
		'.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
			'jest-transform-stub',
		'^.+\\.(js|jsx)?$': 'babel-jest',
		'vee-validate/dist/rules': 'babel-jest',
	},
	transformIgnorePatterns: [
		'<rootDir>/node_modules/(?!vee-validate/dist/rules)',
	],
	testMatch: [
		'**/__tests__/**/*.[jt]s?(x)',
		'**/?(*.)+(spec|test).[jt]s?(x)',
  ],
};
