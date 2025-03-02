import express from "express";
import ViteExpress from "vite-express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

ViteExpress.listen(app, PORT, () =>
  console.log(`Server is listening at ${PORT}`)
);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const clientPath = path.resolve(__dirname, "../dist");
app.use(express.static(clientPath));

import db from "./db/index.js";
const { Favorites } = db;

// endpoint is working
app.get('/favorites', async (req, res) => {
    try {
    const favorites = await Favorites.findAll();
    res.status(200).send(favorites);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.post('/addFavorite', async (req, res) => {
  try {
    const { Title, Rated, Released, Genre, Director, Actors, Plot} = req.body;
    const newFavorite = await Favorites.create({
      title: Title,
      genre: Genre,
      director: Director,
      rated: Rated,
      actors: Actors,
      releaseDate: Released,
      plot: Plot
    });
    res.status(201).send(newFavorite)
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
})