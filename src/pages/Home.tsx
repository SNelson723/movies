import { useEffect, useState } from "react";
import axios from "axios";

const Home = <T,>() => {
  const [text, setText] = useState<string>("");
  // const [params, setParams] = useState<string>('');
  const [movies, setMovies] = useState<T[]>([]);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  const handleSearch = async (method: string) => {
    const apiKey: string = import.meta.env.VITE_API_KEY;

    // build the url
    const params = text.split(" ").join("+");
    const url = `http://www.omdbapi.com/?${method}=${params}&apiKey=${apiKey}`;

    // send axios request and setMovies
    try {
      const { data } = await axios.get(url);
      setMovies([data])
    } catch (err) {
      window.alert(err);
    }
  };

  return (
    <div className="w-[calc(100vw-150px)] h-[100vh] my-5">
      <div className="flex justify-center">
        <div>
          <div>
            <p className="text-center py-2">Seach by Movie Title</p>
          </div>
          <input
            className="py-1 rounded-l-md bg-slate-100"
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
    </div>
  );
};

export default Home;
