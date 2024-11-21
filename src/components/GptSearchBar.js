import React, { useRef } from "react";
import openai from "../utils/openAi";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const searchText = useRef(null);

  const lan = useSelector((store) => store.config.lang);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: searchText.current.value }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
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
