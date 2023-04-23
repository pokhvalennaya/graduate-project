const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  todos: { type: Types.ObjectId, ref: "Todo" },
});

const User = model("User", userSchema);

module.exports = User;
