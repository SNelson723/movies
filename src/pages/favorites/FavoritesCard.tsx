import { Movie } from "../../types";

interface FavoriteProps {
  movie: Movie;
}

const FavoritesCard = ({ movie }: FavoriteProps) => {
  return (
    <div className="shadow-lg bg-white bg-opacity-70 rounded-lg p-4 text-slate-800">
      <div className="flex gap-2">
        <img src={movie.image} height={200} width={150} />
        <div>
          <div>Title: {movie.title}</div>
          <div>Director: {movie.director}</div>
          <div>Actors: {movie.actors}</div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="px-2">{movie.plot}</div>
    </div>
  );
};

export default FavoritesCard;
