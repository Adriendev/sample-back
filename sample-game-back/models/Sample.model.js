const { Schema, model } = require("mongoose");

const sampleSchema = new Schema({
  title: String,
  artiste: String,
  genre: [String],
  timecode: String,
  url: String,
});

const Sample = model("Sample", sampleSchema);

module.exports = Sample;
