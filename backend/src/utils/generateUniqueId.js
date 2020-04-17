const crypto = require("crypto");

module.exports = function generateuniqueId() {
  return crypto.randomBytes(4).toString("HEX");
};
