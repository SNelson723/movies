import { useState } from "react";
import axios from 'axios';

const Home = () => {
  const [text, setText] = useState<string>("");

  return (
    <div className="w-[calc(100vw-150px)] h-[100vh] my-5">
      <div className="flex justify-center">
        <div>
          <div>
            <p className="text-center py-2">Seach by Movie Title</p>
          </div>
          <input
            className="py-1 rounded-l-md"
            type="text"
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
          />
          <button className="border rounded-r-md px-2 py-1">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
