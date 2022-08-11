const Sample = require("../models/Sample.model");
// const samples = require("./data-sample.seed")
const { default: mongoose } = require("mongoose");
require("../db");

// Seed the database with the sample
const samples = [
  {
    sample: {
      title: "Cola Bottle Baby",
      artist: "Edwin Birdsong",
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
  {
    sample: {
      title: "Zamina Mina (Zangalewa)",
      artist: "Golden Sounds",
      genre: ["African Music", "World"],
      timecode: "sample appears at 0:10 and 7:30",
      url: "https://www.youtube.com/embed/EpHQAw6eCOY",
    },
    music: {
      title: "Waka Waka (This Time for Africa)",
      artist: "Shakira",
      genre: ["Pop"],
      url: "https://www.youtube.com/embed/pRpeEdMmmQ0",
      timecode: "sample appears at 0:59 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Parce Que Tu Crois",
      artist: "Charles Aznavour",
      genre: ["French", "Pop"],
      timecode: "sample appears at 0:00",
      url: "https://www.youtube.com/embed/28nMw4zmdKE?",
    },
    music: {
      title: "What's the difference",
      artist: "Dr Dre feat Eminem and Xzibit",
      genre: ["Hip-Hop", "Rap"],
      url: "https://www.youtube.com/embed/pRpeEdMmmQ0",
      timecode: "sample appears at 0:00",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Fate",
      artist: "Chaka Khan",
      genre: ["Soul", "Funk", "Disco"],
      timecode: "sample appears at 0:03",
      url: "https://www.youtube.com/embed/S0NbcNc3HOk?",
    },
    music: {
      title: "Music Sounds Better With You",
      artist: "Stardust",
      genre: ["Electronic", "Dance"],
      url: "https://www.youtube.com/embed/FQlAEiCb8m0",
      timecode: "sample appears at 0:00 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Straight to Hell",
      artist: "The Clash",
      genre: ["Rock", "Pop"],
      timecode: "sample appears at 0:00",
      url: "https://www.youtube.com/embed/t7SvtikTkrM",
    },
    music: {
      title: "Paper Planes",
      artist: "M.I.A.",
      genre: ["Hip-Hop", "R&B"],
      url: "https://www.youtube.com/embed/ewRjZoRtu0Y",
      timecode: "sample appears at 0:00 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Forget Me Nots",
      artist: "Patrice Rushen",
      genre: ["Soul", "Funk", "Disco"],
      timecode: "sample appears at 0:04",
      url: "https://www.youtube.com/embed/jtMHsNhQBvI?",
    },
    music: {
      title: "Men in Black",
      artist: "Will Smith feat Coko",
      genre: ["Hip-Hop", "Rap", "R&B"],
      url: "https://www.youtube.com/embed/fiBLgEx6svA",
      timecode: "sample appears at 0:13 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "The Last TIme",
      artist: "The Andrew Oldham Orchestra",
      genre: ["Rock", "Pop"],
      timecode: "Sample appears at 0:17 and 1:37",
      url: "https://www.youtube.com/embed/9YrllfAMwHI",
    },
    music: {
      title: "Bitter Sweet Symphony",
      artist: "The Verve",
      genre: ["Rock", "Pop"],
      url: "https://www.youtube.com/embed/1lyu1KKwC74",
      timecode: "sample appears at 0:03 and 0:25 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Smile Happy",
      artist: "War",
      genre: ["Disco", "Funk", "Soul"],
      timecode: "sample appears at 0:16 ",
      url: "https://www.youtube.com/embed/s7vZSw7u0Js",
    },
    music: {
      title: "It Wasn't me",
      artist: "Shaggy",
      genre: ["Hip-Hop", "Rap", "R&B"],
      url: "https://www.youtube.com/embed/sTMgX1PDGAE",
      timecode: "sample appears at 0:00 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Are You My Woman? (Tell Me So)",
      artist: "Chi-Lites",
      genre: ["Disco", "Funk", "Soul"],
      timecode: "sample appears at 0:09",
      url: "https://www.youtube.com/embed/hm2YjDENPPU",
    },
    music: {
      title: "Crazy in Love",
      artist: "Beyonce",
      genre: ["Hip-Hop", "R&B"],
      url: "https://www.youtube.com/embed/ViwtNLUqkMY",
      timecode: "sample appears at 0:00 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Tere Mere Beech Mein",
      artist: "Lata Mangeshkar and S. P. Balasubrahlanyam",
      genre: ["Indian", "World"],
      timecode: "sample appears at 0:26 and 0:06",
      url: "https://www.youtube.com/embed/IXVOKep5zeU",
    },
    music: {
      title: "Toxic",
      artist: "Britney Spears",
      genre: ["Rock", "Pop"],
      url: "https://www.youtube.com/embed/LOZuxwVk7TU",
      timecode: "sample appears at 0:00 and 0:01",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Mais Dans La Lumière",
      artist: "Mike Brant",
      genre: ["Pop"],
      timecode: "Sample appears at 0:01",
      url: "https://www.youtube.com/embed/GvN-ZTJG2L0",
    },
    music: {
      title: "Crack a Bottle",
      artist: "Eminem, Dr Dre and 50 Cent",
      genre: ["Hip-Hop", "Rap"],
      url: "https://www.youtube.com/embed/HiVZbFhVeck",
      timecode: "sample appears at 0:06 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "The Edge",
      artist: "David McCallum",
      genre: ["Jazz", "Blues"],
      timecode: "Sample appears at 0:00, 0:10 and 0:05",
      url: "https://www.youtube.com/embed/6pG_3jZxzlo",
    },
    music: {
      title: "The Next Episode",
      artist: "Dr Dre feat Snoop Dogg, Nate Dogg and Kurupt",
      genre: ["Hip-Hop", "Rap"],
      url: "https://www.youtube.com/embed/QZXc39hT8t4",
      timecode: "sample appears at 0:00, 0:05 abd 0:10 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "I Got The...",
      artist: "Labi Siffre",
      genre: ["Soul", "Funk", "Disco"],
      timecode: "Sample appears at 2:10 and 2:31",
      url: "https://www.youtube.com/embed/xKISdd2mKzU?start=129",
    },
    music: {
      title: "My Name Is",
      artist: "Eminem",
      genre: ["Hip-Hop", "Rap"],
      url: "https://www.youtube.com/embed/LDj8kkVwisY",
      timecode: "sample appears at 0:09 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Juicy Fruit",
      artist: "Mtume",
      genre: ["Soul", "Funk", "Disco"],
      timecode: "sample appears at 2:03",
      url: "https://www.youtube.com/embed/9acYQyxL2qw?start=121",
    },
    music: {
      title: "Juicy",
      artist: "The Notorious B.I.G. feat Total",
      genre: ["Hip-Hop", "Rap", "R&B"],
      url: "https://www.youtube.com/embed/_JZom_gVfuw",
      timecode: "sample appears at 0:00 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Valerie",
      artist: "Steve Winwood",
      genre: ["Rock", "Pop"],
      timecode: "sample appears at 1:07 and 1:16",
      url: "https://www.youtube.com/embed/cbKNICg-REA?start=60",
    },
    music: {
      title: "Call on Me",
      artist: "Eric Prydz",
      genre: ["Electronic", "Dance"],
      url: "https://www.youtube.com/embed/f-RJE6e5kSY",
      timecode: "sample appears at 0:13 and 0:33 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Footsteps in the Dark",
      artist: "The Isley Brothers",
      genre: ["Soul", "Funk"],
      timecode: "sample appears at 0:06 and 0:42",
      url: "https://www.youtube.com/embed/WRWtvbyprgo",
    },
    music: {
      title: "It Was a Good Day",
      artist: "Ice Cube",
      genre: ["Hip-Hop", "Rap"],
      url: "https://www.youtube.com/embed/h4UqMyldS7Q?start=9",
      timecode: "sample appears at 0:10 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Soup for One",
      artist: "Chic",
      genre: ["Soul", "Funk", "Disco"],
      timecode: "sample appears at 0:06",
      url: "https://www.youtube.com/embed/f5-9N0DEfmM",
    },
    music: {
      title: "Lady (Hear Me Tonight)",
      artist: "Modjo",
      genre: ["Electronic", "Dance"],
      url: "https://www.youtube.com/embed/mMfxI3r_LyA",
      timecode: "sample appears at 0:00 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Gimme! Gimme! Gimme! (A Man After Midnight)",
      artist: "ABBA",
      genre: ["Pop", "Disco", "Dance"],
      timecode: "sample appears at 0:19",
      url: "https://www.youtube.com/embed/XEjLoHdbVeE?start=17",
    },
    music: {
      title: "Hung Up",
      artist: "Madonna",
      genre: ["Pop", "Disco", "Dance"],
      url: "https://www.youtube.com/embed/EDwb9jOVRtU?start=30",
      timecode: "sample appears at 0:32 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Why Can't We Live Together",
      artist: "Timmy Thomas",
      genre: ["Soul", "Disco", "Funk"],
      timecode: "sample appears at 0:00 and 0:12",
      url: "https://www.youtube.com/embed/cFU-FJzPE80",
    },
    music: {
      title: "Hotline Bling",
      artist: "Drake",
      genre: ["Hip-Hop", "Rap", "R&B"],
      url: "https://www.youtube.com/embed/uxpDa-c-4Mc",
      timecode: "sample appears at 0:20 and 0:34 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Seville",
      artist: "Luiz Bonfa",
      genre: ["Jazz", "Blues"],
      timecode: "sample appears at 0:00",
      url: "https://www.youtube.com/embed/MSDl8w3wR2E",
    },
    music: {
      title: "Somebody That I used to Know",
      artist: "Gotye feat Kimbra",
      genre: ["Pop"],
      url: "https://www.youtube.com/embed/8UVNT4wvIGY",
      timecode: "sample appears at 0:00 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Amores Como El Nuestro",
      artist: "Jerry Rivera",
      genre: ["Latin", "Pop", "World"],
      timecode: "sample appears at 0:00",
      url: "https://www.youtube.com/embed/M85l1qW8x18",
    },
    music: {
      title: "Hips Don't Lie",
      artist: "Shakira feat Wyclef Jean",
      genre: ["Pop", "Hip-Hop"],
      url: "https://www.youtube.com/embed/DUT5rEU6pqM",
      timecode: "sample appears at 0:00 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Ashes, the Rain and I",
      artist: "James Gang",
      genre: ["Rock", "Pop"],
      timecode: "sample appears at 3:33 and 4:09",
      url: "https://www.youtube.com/embed/E-s738XHV6Q?start=210",
    },
    music: {
      title: "Right Here, Right Now",
      artist: "Fatboy Slim",
      genre: ["Electronic", "Dance"],
      url: "https://www.youtube.com/embed/ub747pprmJ8",
      timecode: "sample appears at 0:04 and 0:50",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Psyché Rock",
      artist: "Pierre Henry and Michel Colombier",
      genre: ["Rock", "Pop"],
      timecode: "sample appears at 0:07 and 0:24",
      url: "https://www.youtube.com/embed/bcbrVLuWHRo",
    },
    music: {
      title: "Futurama Theme",
      artist: "Christophe Tyng",
      genre: ["Soundtrack", "OST"],
      url: "https://www.youtube.com/embed/jOqhtxRXVbU",
      timecode: "sample appears at 0:05 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "I Love You More",
      artist: "George Duke",
      genre: ["Soul", "Funk", "Disco"],
      timecode: "sample appears at 0:00 and 0:04",
      url: "https://www.youtube.com/embed/IEibygqqLZc",
    },
    music: {
      title: "Digital Love",
      artist: "Daft Punk",
      genre: ["Electronic", "Dance"],
      url: "https://www.youtube.com/embed/FxzBvqY5PP0",
      timecode: "sample appears at 0:00 and 1:51 tand throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Woman to Woman",
      artist: "Joe Cocker",
      genre: ["Rock", "Pop"],
      timecode: "sample appears at 0:04",
      url: "https://www.youtube.com/embed/pt-S5XMc91U",
    },
    music: {
      title: "California Love",
      artist: "2Pac feat Dr. Dre and Roger Troutman",
      genre: ["Hip-Hop", "Rap"],
      url: "https://www.youtube.com/embed/5wBTdfAkqGU?start=5",
      timecode: "sample appears at 0:05 and 1:22 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Last Men Standing",
      artist: "Gianfranco Reverberi and Gian Piero Reverberi",
      genre: ["Soundtrack", "OST"],
      timecode: "sample appears at 0:00 and 1:07",
      url: "https://www.youtube.com/embed/Zhxb00ONI_A",
    },
    music: {
      title: "Crazy",
      artist: "Gnarls Barkley",
      genre: ["Hip-Hop", "Rap", "R&B"],
      url: "https://www.youtube.com/embed/Qe500eIK1oA",
      timecode: "sample appears at 0:00 and 0:36 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Prison Song",
      artist: "Carlton Williams",
      genre: ["Soul", "Funk", "Disco"],
      timecode: "sample appears at 0:00 and 0:30",
      url: "https://www.youtube.com/embed/s6F37L7vtyw",
    },
    music: {
      title: "Mask Off",
      artist: "Future",
      genre: ["Hip-Hop", "Rap"],
      url: "https://www.youtube.com/embed/xvZqHgFz51I?start=96",
      timecode: "sample appears at 1:36 and 3:12 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Khusara Khusara",
      artist: "Hossam Ramzy",
      genre: ["World", "Arabic"],
      timecode: "sample appears at 0:00",
      url: "https://www.youtube.com/embed/Vnl7R8de3ps",
    },
    music: {
      title: "Big Pimpin",
      artist: "Jay-Z feat UGK",
      genre: ["Hip-Hop", "Rap"],
      url: "https://www.youtube.com/embed/Cgoqrgc_0cM",
      timecode: "sample appears at 0:00 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Before the Night Is Over",
      artist: "Joe Simon",
      genre: ["Soul", "Funk", "Disco"],
      timecode: "sample appears at 0:00",
      url: "https://www.youtube.com/embed/8CWNkVWBi38",
    },
    music: {
      title: "So Fresh So Clean",
      artist: "Outkast",
      genre: ["Hip-Hop", "Rap", "R&B"],
      url: "https://www.youtube.com/embed/-JfEJq56IwI?start=13",
      timecode: "sample appears at 0:13 (and throughout)",
    },
    hasBeenPlayed: false,
  },
  {
    sample: {
      title: "Atomic Dog",
      artist: "George Clinton",
      genre: ["Soul", "Funk", "Disco"],
      timecode: "sample appears at 0:47 and 1:05",
      url: "https://www.youtube.com/embed/LuyS9M8T03A?start=47",
    },
    music: {
      title: "Who Am I (what's my name?)",
      artist: "Snoop Dogg",
      genre: ["Hip-Hop", "Rap"],
      url: "https://www.youtube.com/embed/UbI2TS0fW4Q?start=104",
      timecode: "sample appears at 1:44. and 1:54 (and throughout)",
    },
    hasBeenPlayed: false,
  },
];

async function seedSamples() {
  console.log(samples.length);
  const createdSamples = await Sample.findOneAndUpdate(samples, {
    upsert: true,
    new: true,
  });
  console.log(`Created ${createdSamples.length} samples: ${createdSamples}`);
  await mongoose.connection.close();
  console.log("Connection closed");
}

seedSamples();
