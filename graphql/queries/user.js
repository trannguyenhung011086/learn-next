const UserType = require("../types/user");

module.exports = {
  type: UserType,
  description: "User",
  resolve: async () => {
    return { name: 123 };
  }
};
