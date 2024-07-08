const Customer = require("./Customer");
const Order = require("./Order");
const OrderDetailes = require("./OrderDetailes");
Customer.hasMany(Order, { foreignKey: "customerId" });
Order.hasMany(OrderDetailes, { foreignKey: "orderId" });
module.exports = { Customer, Order, OrderDetailes };
