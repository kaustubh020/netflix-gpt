import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  //console.log(props.movies);
  if (!props.movies || props.movies.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1 className="text-white">{props.title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {props.movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
          {/* <MovieCard posterPath={props.movies[0].poster_path} /> */}
        </div>
      </div>
    </div>
  );

  //   if (!movies.length) {
  //     return <h1>Loading movies...</h1>;
  //   }

  //   return (
  //     <div>
  //       <h1>{title}</h1>
  //       <h1>{movies[0]?.poster_path}</h1>
  //     </div>
  //   );
};

export default MovieList;
