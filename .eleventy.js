const { DateTime } = require("luxon");
const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
	eleventyConfig.setUseGitIgnore(false);
	eleventyConfig.addFilter("readableDate", (dateObj, fmt) => {
		if (fmt == undefined) {
			fmt = "yyyy-LL-dd";
		}
		return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat(fmt);
	});

	eleventyConfig.addFilter("cssmin", function(code) {
		return new CleanCSS({}).minify(code).styles;
	});

	return {
		dir: {
			input: "src"
		}
	}
};
