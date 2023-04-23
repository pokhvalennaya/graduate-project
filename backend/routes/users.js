const fs = require("fs");
const path = require("path");
const { Router } = require("express");
const User = require("../models/user");
const Product = require("../models/product");

const router = Router();

// api/users
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.post("/", async (req, res) => {
  console.log(req.body);

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  });

  const savedUser = await newUser.save();

  // Add product
  const newProduct = new Product({
    name: "iPhone",
    price: 1000,
    description: "lorem ipsum",
  });
  await newProduct.save();

  res.json({ id: savedUser._id });
});

// api/users/1
// api/users/2
// api/users/3
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await User.deleteOne({ _id: id });
  res.json({ id, message: "success" });
});

module.exports = router;
