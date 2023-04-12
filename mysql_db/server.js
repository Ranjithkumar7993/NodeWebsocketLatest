const { Sequelize, DataTypes } = require("sequelize");
const db = require("./config/database");
const User = require("./models/user.model.js");

// db.authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((error) => {
//     console.error("Unable to connect to the database: ", error);
//   });

async function fetchUser() {
  let user = await User.findOne({
    where: { email: "ranjith@colegia.org" },
  });
  console.log(user.email);
}

fetchUser();
// User.findAll({
//   where: { email: "ranjith@colegia.org" },
//   attributes: ["email"],
// })
//   .then((user) => {
//     console.log(user[0].email);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
