import { Movie } from "../../types";

interface FavoriteProps {
  movie: Movie;
}

const FavoritesCard = ({ movie}: FavoriteProps) => {
  return (
    <div>
      <div className="text-slate-100">
        {movie.title}
      </div>
    </div>
  )
};


export default FavoritesCard;