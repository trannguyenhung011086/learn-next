require("dotenv").config();

module.exports = {
  contentful: {
    space: process.env.CONTENTFUL_SPACE,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  }
};
