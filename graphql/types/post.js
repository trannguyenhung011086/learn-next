const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Post",
  description: "Post data",
  fields: () => ({
    title: {
      type: GraphQLString
    },
    // content: {
    //   type: GraphQLString
    // },
    body: {
      type: GraphQLString
    },
    date: {
      type: GraphQLString
    },
    alt: {
      type: GraphQLString
    },
    images: {
      type: new GraphQLList(GraphQLString)
    },
    url: {
      type: GraphQLString
    }
  })
});
