const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  birth: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  telephone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  iban: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: [
    {
      type: String,
      default: "user",
    },
  ],
  active: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("User", userSchema);
