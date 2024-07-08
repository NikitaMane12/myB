const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Customer } = require("../models/sql/Customer");
const { genrateResponse } = require("../utils/response");
const { where } = require("../models/nonsql/Book");
exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const customer = await Customer.create({
      name,
      email,
      password: hashedPassword,
    });
    res.status(201).json(genrateResponse("user registration succssfull"));
  } catch (error) {
    res.status(400).json(genrateResponse("user is not valid", null, error));
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const customer = await Customer.findOne({ where: { email } });
    if (!customer || !(await bcrypt.compare(password, customer.password))) {
      return res.status(401).json(genrateResponse("invalid email or password"));
    }
    const token = jwt.sign(
      { id: customer.id, email: customer.email },
      process.env.jwt_SECRET,
      { expiresIn: "1h" }
    );
  } catch (error) {
    res.status(400).json(genrateResponse("Error logging in", null, error));
  }
};
