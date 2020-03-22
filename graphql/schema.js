const { GraphQLSchema, GraphQLObjectType } = require("graphql");

const query = new GraphQLObjectType({
  name: "Query",
  description: "API to get data",
  fields: () => ({
    user: require("./queries/user"),
    posts: require("./queries/posts")
  })
});

module.exports = new GraphQLSchema({ query });
