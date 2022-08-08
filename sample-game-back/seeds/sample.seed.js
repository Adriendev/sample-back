const Sample = require("../models/Sample.model");
const openConnection = require("../db/index");
const { default: mongoose } = require("mongoose");

// Seed the database with the sample

const samples = [
  {
    sample: {
      title: "Cola Bottle Baby",
      artiste: "Edwin Birdsong",
      genre: ["Soul", "Funk", "Disco"],
      timecode: "sample appears at 0:00 and 4:51",
      url: "https://www.youtube.com/embed/fiD39jo5Yo4",
    },
    music: {
      title: "Harder, Better, Faster, Stronger",
      artist: "Daft Punk",
      genre: ["Electronic", "Dance"],
      url: "https://www.youtube.com/embed/gAjR4_CbPpQ",
      timecode: "sample appears at 0:05 and 0:20 (and throughout)",
    },
    hasBeenPlayed: false,
  },
];

async function seedSamples() {
  await openConnection();
  const createdSamples = await Sample.findOneAndUpdate(samples, {
    upsert: true,
    new: true,
  });
  console.log(`Created ${createdSamples.length} samples: ${createdSamples}`);
  await mongoose.connection.close();
  console.log("Connection closed");
}

seedSamples();
