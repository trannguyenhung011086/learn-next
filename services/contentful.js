const contentful = require("contentful");
const config = require("../config");

const client = contentful.createClient({
  space: config.contentful.space,
  accessToken: config.contentful.accessToken
});

module.exports = {
  async getEntries(search) {
    try {
      const entries = await client.getEntries(search);
      return entries.items;
    } catch (err) {
      console.error("Error getting Entries", err);
    }
  }
};
