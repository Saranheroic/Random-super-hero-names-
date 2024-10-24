import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit",(req,res)=>{
  const randomNames= superheroNames[Math.floor(Math.random()*superheroNames.length)];
  console.log(randomNames)
  res.render("index.ejs",{heroNames:randomNames})
 

})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


const superheroNames = [
  // Marvel Superheroes
  "Iron Man",
  "Spider-Man",
  "Captain America",
  "Thor",
  "Hulk",
  "Black Widow",
  "Doctor Strange",
  "Black Panther",
  "Scarlet Witch",
  "Vision",
  "Ant-Man",
  "Wasp",
  "Hawkeye",
  "Captain Marvel",
  "Star-Lord",
  "Gamora",
  "Groot",
  "Rocket Raccoon",
  "Drax",
  "Winter Soldier",
  "Falcon",
  "War Machine",
  "Quicksilver",
  "Nick Fury",
  "Deadpool",
  "Wolverine",
  "Professor X",
  "Storm",
  "Jean Grey",
  "Cyclops",
  "Nightcrawler",
  "Beast",
  "Rogue",
  "Gambit",
  "Iceman",
  "Magneto",
  "She-Hulk",
  "Blade",
  "Ghost Rider",
  "Silver Surfer",
  "Moon Knight",
  "Shang-Chi",
  "Elektra",
  "The Punisher",
  "Nova",

  // DC Superheroes
  "Superman",
  "Batman",
  "Wonder Woman",
  "The Flash",
  "Aquaman",
  "Cyborg",
  "Green Lantern",
  "Shazam",
  "Martian Manhunter",
  "Green Arrow",
  "Black Canary",
  "Zatanna",
  "Hawkman",
  "Hawkgirl",
  "Batgirl",
  "Supergirl",
  "Nightwing",
  "Red Hood",
  "Robin",
  "Raven",
  "Starfire",
  "Beast Boy",
  "Blue Beetle",
  "Booster Gold",
  "Constantine",
  "Doctor Fate",
  "Swamp Thing",
  "Vixen",
  "The Atom",

  // Other Superheroes (from various media/comics)
  "Spawn",
  "Hellboy",
  "The Tick",
  "Kick-Ass",
  "Hit-Girl",
  "Rorschach",
  "Silk Spectre",
  "Ozymandias",
  "Doctor Manhattan",
  "The Phantom",
  "The Shadow",
  "The Rocketeer",
  "Static Shock",
  "Sentry",
  "Ms. Marvel",
  "Iron Fist",
  "Luke Cage",
  "Jessica Jones",
  "Squirrel Girl",
  "Adam Warlock",
  "Beta Ray Bill",
  "Mister Fantastic",
  "Invisible Woman",
  "Human Torch",
  "The Thing",
  "Namor the Sub-Mariner",
  "Morph",
  "Darkhawk",
  "X-23",

  // Anime/Manga Superheroes
  "Goku",
  "Vegeta",
  "Naruto Uzumaki",
  "Sasuke Uchiha",
  "Luffy",
  "Zoro",
  "Deku (Izuku Midoriya)",
  "All Might",
  "Saitama (One Punch Man)",
  "Genos",
  "Edward Elric",
  "Alphonse Elric"
];
