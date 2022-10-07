const { connect } = require("mongoose");
module.exports = () =>
  connect(
    "mongodb+srv://navneet-mocks:fw13_222@mocks-backend.l4rwbw2.mongodb.net/google-o-auth"
  );
