const { Router, request } = require("express");
const router = Router();
const User = require("../models/user");

router.post("/registration", async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUsed = await User.findOne({ email });

    if (isUsed) {
      return res
        .status(300)
        .json({ message: "Цей email вже використовується, спробуйте інший" });
    }

    const user = new User({ email, password });

    await user.save();

    res.status(201).json({ message: "Користувач зареєстрований" });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
