const Book = require("../models/nonsql/Book");
const { Order, OrderDetailes } = require("../models/sql");
const { genrateResponse } = require("../utils/response");

exports.getOrderByCustomer = async (req, res) => {
  const { customerId } = req.params;
  try {
    const Orders = await Order.findAll({
      where: {
        customerId,
      },
      include: [
        {
          model: OrderDetailes,
          include: [{ model: Book, attributes: ["title", "author"] }],
        },
      ],
    });
    res
      .status(200)
      .json(genrateResponse("Orders retrived successfullt", Orders));
  } catch (error) {
    res.status(400).json(genrateResponse("error retriving books", null, error));
  }
};
