const sequelize = require("sequelize");
const db = require("../config/database");

const User = db.define(
  "users",
  {
    uuid: {
      type: sequelize.DataTypes.STRING,
      primaryKey: true,
    },
    email: {
      type: sequelize.DataTypes.STRING,
    },
    first_name: {
      type: sequelize.DataTypes.STRING,
    },
  },
  { timestamps: false }
);

module.exports = User;
