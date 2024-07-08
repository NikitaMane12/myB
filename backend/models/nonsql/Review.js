const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const reviewSchema = new mongoose.Schema({
  bookId: { type: Schema.Types.ObjectId, ref: "Book", required: true },
  customerId: { type: Number, required: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  Comment: { type: String, required: true },
});
module.exports = mongoose.model("Review", reviewSchema);
