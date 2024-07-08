const { check, validationResult } = require("express-validator");
exports.validateRegistration = [
  check("name").not().isEmpty().withMessage("name is required"),
  check("email").isEmail().withMessage("email is valid"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("password must be 6 character"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
