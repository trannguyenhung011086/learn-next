const { GraphQLList, GraphQLInt } = require("graphql");
const PostType = require("../types/post");

const contentful = require("../../services/contentful");

module.exports = {
  type: new GraphQLList(PostType),
  description: "List of posts",
  args: {
    limit: {
      type: GraphQLInt
    },
    skip: {
      type: GraphQLInt
    }
  },
  resolve: async (root, { limit, skip }) => {
    const entries = await contentful.getEntries({
      limit,
      skip,
      content_type: "post"
    });
    return entries.map(entry => entry.fields);
  }
};
