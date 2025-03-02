import { Movie } from "../../types";

interface FavoriteProps {
  movie: Movie;
}

const FavoritesCard = ({ movie }: FavoriteProps) => {
  return (
    <div className="shadow-lg bg-slate-500 bg-opacity-50 rounded-lg text-slate-100">
      <div className="flex">
        <div>
          <img src={movie.image} height={200} width={150} />
        </div>
        <div>
          <div>Title: {movie.title}</div>
          <div>Director: {movie.director}</div>
          <div>Actors: {movie.actors}</div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div>{movie.plot}</div>
    </div>
  );
};

export default FavoritesCard;
