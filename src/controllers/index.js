const homeControllers = require("./home");

module.exports = {
  ...homeControllers,
  ...require("./messages"),
};
