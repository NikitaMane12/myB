const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../config/dbconfig").sequelize;
const Order = require("./Order");
class OrderDetailes extends Model {}
OrderDetailes.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    oredrId: {
      type: DataTypes.INTEGER,
      references: { model: Order, key: "id" },
      allowNull: false,
    },
    bookId: { type: DataTypes.STRING, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
  },
  { sequelize, modelName: "OrderDetail" }
);
OrderDetailes.belongsTo(Order, { foreignKey: "orderId" });
module.exports = OrderDetailes;
