const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbconfig").sequelize;
const Customer = require("./Customer");
class Order extends Model {}
Order.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    customerId: {
      type: DataTypes.INTEGER,
      references: { model: Customer, key: "id" },
      allowNull: false,
    },
    totalAmount: { type: DataTypes.FLOAT, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { sequelize, modelName: "Order" }
);
Order.belongsTo(Customer, { foreignKey: "customerId" });
module.exports = Order;
