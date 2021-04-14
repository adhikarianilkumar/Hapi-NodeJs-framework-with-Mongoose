const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: [true, "Please enter FIRST NAME"],
    min: 6,
    max: 225,
  },
  middleName: {
    type: String,
    min: 6,
    max: 225,
  },
  lastName: {
    type: String,
    required: [true, "Please enter LAST NAME"],
    min: 6,
    max: 225,
  },
  gender: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Please enter EMAIL ADDRESS"],
    min: 6,
    max: 225,
  },
  phoneNumber: {
    type: String,
    required: [true, "Please enter PHONE NUMBER"],
    length: 10,
  },
  password: {
    type: String,
    required: [true, "Please enter PASSWORD"],
    min: 6,
    max: 1024,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  updatedAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User_tbl", userSchema);
