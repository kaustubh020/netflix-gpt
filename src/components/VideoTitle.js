import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-24 absolute pt-[20%] text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="text-lg py-6 w-1/3">{overview}</p>
      <div>
        <button className="font-bold  bg-white text-black p-4 px-12 text-xl rounded-sm hover:bg-opacity-50 cursor:pointer ">
          Play
        </button>
        <button className="font-bold  bg-slate-400 text-white p-4 px-12 text-xl rounded-sm mx-3">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
