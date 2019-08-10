import { DateTime } from "luxon";
import CleanCSS from "clean-css";

export default function(eleventyConfig) {

  eleventyConfig.addFilter("readableDate", (dateObj, fmt) => {
    if (fmt == undefined) {
      fmt = "yyyy-LL-dd";
    }
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat(fmt);
  });

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

};