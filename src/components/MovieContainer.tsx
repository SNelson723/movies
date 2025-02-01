import { MovieObj } from "../types";

interface MovieContainerProps {
  movie: MovieObj
}

const MovieContainer = ({ movie }: MovieContainerProps) => {
  return (
    <div className="max-w-[35vw] bg-gray-600 bg-opacity-25 shadow-lg rounded-lg p-2">
      <div id="left" className="flex">
        <div className="pl-2 ">
          <img width={200} src={movie.Poster} />
        </div>

        <div className="ml-4 text-left flex flex-col justify-between">
          <div>
            <span className="font-medium">Title: </span>
            <span>{movie.Title}</span>
          </div>
          <div>
            <span className="font-medium">Genre: </span>
            <span>{movie.Genre}</span>
          </div>
          <div>
            <span className="font-medium">Director: </span>
            <span>{movie.Director}</span>
          </div>
          <div>
            <span className="font-medium">Rated: </span>
            <span>{movie.Rated}</span>
          </div>
          <div className="text-wrap">
            <span className="font-medium">Actors: </span>
            <span>{movie.Actors}</span>
          </div>
          {movie.Ratings.map((rating, i) => (
            <div key={`rating-${i}`}>
              <span className="font-medium">{rating.Source}: </span>
              <span>{rating.Value}</span>
            </div>
          ))}
          <div>
            <span className="font-medium">Released: </span>
            <span>{movie.Released}</span>
          </div>
        </div>
      </div>

      <div className="mt-3 text-center">
        <span className="font-medium">Plot</span>
        <p>{movie.Plot}</p>
      </div>
    </div>
  );
};

export default MovieContainer;
