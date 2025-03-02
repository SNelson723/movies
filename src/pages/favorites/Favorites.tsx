import axios from "axios";
import { useEffect, useState } from "react";
import { Movie } from "../../types";
import FavoritesCard from "./FavoritesCard";

const Favorites = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getFavorites = async () => {
      const { data } = await axios.get("/favorites");
      setMovies(data);
    };
    getFavorites();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-3 gap-6 px-12 mt-12">
        {movies.length &&
          movies.map((movie: Movie) => (
            <FavoritesCard key={`movie_${movie.id}`} movie={movie} />
          ))}
      </div>
    </div>
  );
};

export default Favorites;
