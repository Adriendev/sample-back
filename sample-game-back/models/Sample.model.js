const { Schema, model } = require("mongoose");

const sampleSchema = new Schema({
  sample :{
  title: String,
  artist: String,
  genre: [String],
  timecode: String,
  url: String,
  },
  music :{
    title: String,
    artist: String,
    genre: [String],
    timecode: String,
    url: String,
  },
  hasBeenPLayed: Boolean,
});

const Sample = model("Sample", sampleSchema);

module.exports = Sample;
