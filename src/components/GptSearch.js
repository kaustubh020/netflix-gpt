import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import backLogo from "../img/background.jpg";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute w-full -z-10">
        <img
          className="w-full left-0 right-0 mx-auto"
          src={backLogo}
          alt="background-img"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
