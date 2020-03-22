module.exports = function(migration) {
  const post = migration
    .createContentType("post")
    .name("Post")
    .description("Post Data");

  post
    .createField("title")
    .name("Title")
    .type("Symbol")
    .required(true);

  post
    .createField("content")
    .name("Content")
    .type("Text")
    .required(true);

  post
    .createField("url")
    .name("URL")
    .type("Symbol");

  post
    .createField("alt")
    .name("alt")
    .type("Symbol");

  post
    .createField("date")
    .name("Date")
    .type("Date");
};
