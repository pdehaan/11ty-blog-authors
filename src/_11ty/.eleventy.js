const collections  = require("./collections");
const filters = require("./filters");

module.exports = eleventyConfig => {
  collections(eleventyConfig);
  filters(eleventyConfig);

  return {
    dir: {
      input: "src"
    }
  };
};
