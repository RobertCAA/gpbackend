const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: false,
  },
  last_name: {
    type: String,
    required: false,
  },
  birth: {
    type: Date,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  telephone: {
    type: Number,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  iban: {
    type: String,
    required: false,
  },
  location: {
    type: String,
    required: false,
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
