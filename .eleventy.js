const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    // Specify a folder that will be pass through to the output folder with no processing steps involved
    eleventyConfig.addPassthroughCopy("images");
    eleventyConfig.addPassthroughCopy("admin");
    // eleventyConfig.addShortcode("excerpt", (article) => extractExcerpt(article));

    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });
}

// function extractExcerpt(article) {
//     if (!article.hasOwnProperty("templateContent")) {
//       console.warn(
//         'Failed to extract excerpt: Document has no property "templateContent".'
//       );
//       return null;
//     }
  
//     let excerpt = null;
//     const content = article.templateContent;
  
//     excerpt = striptags(content)
//       .substring(0, 200) // Cap at 200 characters
//       .replace(/^\s+|\s+$|\s+(?=\s)/g, "")
//       .trim()
//       .concat("...");
//     return excerpt;
//   }