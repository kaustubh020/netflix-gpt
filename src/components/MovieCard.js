import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-48 p-1">
      <img alt="img" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
