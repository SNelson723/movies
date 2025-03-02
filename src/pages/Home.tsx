import { useEffect, useState } from "react";
import axios from "axios";
import { MovieObj } from "../types";
import MovieContainer from "../components/MovieContainer";

const Home = () => {
  const [text, setText] = useState<string>("");
  const [movies, setMovies] = useState<MovieObj[]>([]);

  const handleSearch = async (method: string) => {
    const apiKey: string = import.meta.env.VITE_API_KEY;
    const params = text.split(" ").join("+");
    const url = `http://www.omdbapi.com/?${method}=${params}&apiKey=${apiKey}`;

    try {
      const { data } = await axios.get(url);
      setMovies((prev) => [...prev, data]);
    } catch (err) {
      window.alert(err);
    }
  };

  return (
    <div className="w-[calc(100vw-150px)] h-[100vh] max-h-[100vh] mb-5">
      <div className="flex justify-center">
        <div>
          <div>
            <p className="text-center py-2">Search by Movie Title</p>
          </div>
          <input
            className="py-1 pl-2 rounded-l-md bg-indigo-200"
            type="text"
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
          />
          <button
            className="border border-slate-900 rounded-r-md px-2 py-1"
            onClick={() => handleSearch("t")}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex justify-center py-5 flex-wrap">
        {movies.length
          ? movies.map((movie, i) => (
              <MovieContainer key={`movie-${i}`} movie={movie} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Home;
