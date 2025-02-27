import { Sequelize, DataTypes } from "sequelize";

// Using this to access the environment variables
import dotenv from "dotenv";
dotenv.config();

const HOST = "localhost";
const USERNAME = "root";
const PASSWORD = process.env.DB_PASSWORD;
const DATABASE = process.env.DB_NAME;

const db = new Sequelize({
  host: HOST,
  dialect: "mysql",
  username: USERNAME,
  password: PASSWORD,
  database: 'mymovies',
});

db.authenticate()
  .then(() =>
    console.log("Database connection has been established successfully.")
  )
  .catch((error) => console.error("Unable to connect to the database:", error));

const Favorites = db.define("favorite", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  director: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rated: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  actors: {
    type: DataTypes.STRING,
    allowNull: false
  },
  releaseDate: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

  db.sync()
    .then(() => {
      console.log("Database synchronized");
    })
    .catch((err) => {
      console.error("Database synchronization error: ", err);
    });

  export default {
    sequelize: db,
    Favorites
  };