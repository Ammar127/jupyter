const { body, check } = require("express-validator");
const User = require("../models/User");

const registerUser = [
  check("password").isLength({ min: 3 }),
  check("name")
    .not()
    .isEmpty(),
  body("email")
    .isEmail()
   
];

const createOrder = [
  check("vendorId")
    .not()
    .isEmpty(),
  check("userId")
    .not()
    .isEmpty(),
  check("products")
    .not()
    .isEmpty()
];

module.exports = {
  registerUser,
  createOrder
};
