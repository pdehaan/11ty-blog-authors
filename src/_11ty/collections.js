module.exports = (config) => {
  config.addCollection("authors", collection => {
    const blogs = collection.getFilteredByGlob("src/blog/*.njk");
    return blogs.reduce((coll, post) => {
      const author = post.data.author;
      if (!author) {
        return coll;
      }
      if (!coll.hasOwnProperty(author)) {
        coll[author] = [];
      }
      coll[author].push(post.data);
      return coll;
    }, {});
  });
  config.addCollection("blog", collection =>
    collection.getFilteredByGlob("src/blog/*.njk")
  );
};