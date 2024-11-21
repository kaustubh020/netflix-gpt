import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { gptMovies, gptMovieNames } = useSelector((store) => store.gpt);
  return (
    <div className="font-bold text-white text-lg bg-black p-4 m-4 bg-opacity-60">
      <div>
        {gptMovieNames.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={gptMovies[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
