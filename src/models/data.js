const mongoose = require("mongoose");

const informationSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: [true, "provide your name please"],
  },
  sobrenome: {
    type: String,
    required: [true, "provide your last name please"],
  },
  email: {
    type: String,
    required: [true, "provide your email please"],
  },
  idade: {
    type: Number,
    required: [true, "provide your age please"],
  },
});

module.exports = mongoose.model("Data", informationSchema);
