const { GraphQLObjectType, GraphQLString, GraphQLInt } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "User",
  description: "User data",
  fields: () => ({
    name: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    }
  })
});
