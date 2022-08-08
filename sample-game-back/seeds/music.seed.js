const Music = require("../models/Music.model");
const openConnection = require("../db/index");
const { default: mongoose } = require("mongoose");

// Seed the DB with the music to find

const musics = [];

async function seedMusics() {
  await openConnection();
  const createdMusics = await Music.findOneAndUpdate(musics, {
    upsert: true,
    new: true,
  });
  const openConnection = require("../db/index");
  const { default: mongoose } = require("mongoose");
}

seedMusics();
