import axios from "axios";
import { useEffect } from "react";

const Favorites = () => {

  useEffect(() => {
    const getFavorites = async () => {
      const { data } = await axios.get('/favorites');
      console.log(data)
    };
    getFavorites();
  }, [])

 return (
  <div>
    <div>
      
    </div>
  </div>
 )
};

export default Favorites;