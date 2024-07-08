const Review = require("../models/nonsql/Review");
const { genrateResponse } = require("../utils/response");

exports.getReviewsByBook = async (req, res) => {
  const { bookId } = req.params;
  try {
    const reviews = await Review.find({ bookId }).populate(
      "customerId",
      "name email"
    );
    res.status(200).json(genrateResponse("reviews retrived successfully"));
  } catch (error) {
    res
      .status(400)
      .json(genrateResponse("error retriving reviews", null, error));
  }
};
