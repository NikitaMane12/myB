const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/dbconfig");

class Customer extends Model {}

Customer.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
  },
  { sequelize, modelName: "Customer" }
);

module.exports = Customer;
