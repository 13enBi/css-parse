module.exports = {
	collectCoverage: true,
	transform: {
		"^.+\\.ts$": "ts-jest",
	},
	testPathIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|ts|mjs)$", "<rootDir>/node_modules/"],
};
