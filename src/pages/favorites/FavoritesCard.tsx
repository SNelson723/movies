import { Movie } from "../../types";

interface FavoriteProps {
  movie: Movie;
}

const FavoritesCard = ({ movie}: FavoriteProps) => {
  return (
    <div className="shadow-lg bg-slate-500 bg-opacity-50 rounded-lg text-slate-100">
      <div className="flex">
        <div>
          Picture
        </div>
        <div>
          Details
        </div>
      </div>
      <div>
        Plot
      </div>
    </div>
  )
};


export default FavoritesCard;