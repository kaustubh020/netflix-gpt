import React, { useRef } from "react";
import openai from "../utils/openAi";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const lan = useSelector((store) => store.config.lang);

  //search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    //console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie Reccomendation system and suggest movie for the query : " +
      searchText.current.value +
      ". only gives me names of 5 movies, comma separated. Example: Don2 , Murder 3 , Krish , kameeney , Villion ";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices[0].message.content);
    const gptMovies = gptResults.choices[0].message.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    //console.log(tmdbResults);
    dispatch(
      addGptMovieResult({ gptMovies: tmdbResults, gptMovieNames: gptMovies })
    );
  };
  return (
    <div className="  flex justify-center bg-black ">
      <form
        className=" w-1/2 bg-black grid grid-cols-12  "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 px-6 col-span-9 "
          placeholder={lang[lan].placeholder}
        />
        <button
          onClick={handleGptSearchClick}
          className=" py-2 px-4 col-span-3 m-4 bg-red-600 text-white rounded-lg"
        >
          {lang[lan].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
