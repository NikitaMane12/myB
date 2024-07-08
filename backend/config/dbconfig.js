const { Sequelize } = require("sequelize");
const mongoose = require("mongoose");
const config = require("./config.json")[process.env.NODE_ENV || "development"];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect,
  }
);

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
const database = (url) => {
  try {
    mongoose.connect(url);
    console.log("cntd");
  } catch (err) {
    console.log(err);
  }
};

module.exports = { sequelize, database };
