const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addFilter("readableDate", (dateObj, fmt) => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat(fmt);
  });

  return {
    passthroughFileCopy: true
  };

};