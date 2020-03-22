const runMigration = require("contentful-migration/built/bin/cli").runMigration;
const config = require("../../config");

const options = {
  spaceId: config.contentful.space,
  accessToken: config.contentful.accessToken
};

const migrations = async () => {
  try {
    await runMigration({ ...options, ...{ filePath: "data.js" } });
    console.log("Contenful migration Done!");
  } catch (e) {
    console.error("Error with Contentful migration", e);
  }
};

migrations();
