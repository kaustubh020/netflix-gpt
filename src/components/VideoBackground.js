import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = (props) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(props.movieId);

  return (
    <div>
      {trailerVideo ? (
        <>
          <iframe
            className="w-screen aspect-video"
            src={
              "https://www.youtube.com/embed/" +
              trailerVideo.key +
              "?si=J2GKfH7yEXRdAB6m&autoplay=1&mute=1"
            }
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
};

export default VideoBackground;
