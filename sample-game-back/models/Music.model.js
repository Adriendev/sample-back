const { Schema, model, SchemaTypes } = require("mongoose");

const musicSchema = new Schema({
  sample: {
    type: SchemaTypes.ObjectId,
    ref: "Sample",
  },
  title: String,
  artiste: String,
  genre: [String],
  timecode: String,
  url: String,
});

const Music = model("Music", musicSchema);

module.exports = Music;
