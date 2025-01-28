import { useEffect, useState } from "react";
import axios from "axios";
import { MovieObj } from "../types";

const Home = () => {
  const [text, setText] = useState<string>("");
  const [movies, setMovies] = useState<MovieObj[]>([]);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  const handleSearch = async (method: string) => {
    const apiKey: string = import.meta.env.VITE_API_KEY;
    const params = text.split(" ").join("+");
    const url = `http://www.omdbapi.com/?${method}=${params}&apiKey=${apiKey}`;

    try {
      const { data } = await axios.get(url);
      setMovies([data]);
    } catch (err) {
      window.alert(err);
    }
  };

  return (
    <div className="w-[calc(100vw-150px)] h-[100vh] max-h-[100vh] mb-5">
      <div className="flex justify-center">
        <div>
          <div>
            <p className="text-center py-2">Seach by Movie Title</p>
          </div>
          <input
            className="py-1 rounded-l-md bg-indigo-200"
            type="text"
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
          />
          <button
            className="border rounded-r-md px-2 py-1"
            onClick={() => handleSearch("t")}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex justify-center py-5">
        {movies.length ? movies.map((movie, i) => (
          <div
            key={`movie-${i}`}
            className="w-[45vw] text-center grid grid-cols-4 gap-3 bg-indigo-200 rounded-lg p-2"
          >
            <div className="col-span-2 col-start-2 pl-2">
              <img src={movie.Poster} />
            </div>

            <div className="col-span-2">
              <span className="font-medium">Title: </span>
              <span>{movie.Title}</span>
            </div>

            <div className="col-span-2">
              <span className="font-medium">Director: </span>
              <span>{movie.Director}</span>
            </div>

            <div className="col-span-2">
              <span className="font-medium">Rated: </span>
              <span>{movie.Rated}</span>
            </div>
            <div className="col-span-2">
              <span className="font-medium">Genre: </span>
              <span>{movie.Genre}</span>
            </div>
            <div className=" col-span-4">
              <div className="flex justify-center">
                <span className="font-medium">Actors: </span>
                <span>{movie.Actors}</span>
              </div>
            </div>

            <div className="col-span-4">
              <span className="font-medium">Plot</span>
              <p>{movie.Plot}</p>
            </div>

            <div className="col-span-2 col-start-2">
              <span className="font-medium">Released: </span>
              <span>{movie.Released}</span>
            </div>

            <div className="col-span-4">
              <div className='flex justify-around'>
                {movie.Ratings.map((rating, i) => (
                  <div key={`rating-${i}`}>
                    <span className="font-medium">{rating.Source}: </span>
                    <span>{rating.Value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )) : null}
      </div>
    </div>
  );
};

export default Home;
