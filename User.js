const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nama tidak boleh kosong"],
  },
  age: {
    type: Number,
    required: [true, "Nama tidak boleh kosong"],
  },
  status: {
    type: String,
    enum: ["active", "not active"],
    default: "non active",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User