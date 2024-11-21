import React from "react";
import homeLogo from "../img/homeLogo.png";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { userAvatar } from "../utils/constants";
import { toggleGptSeachView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  const handleGptSearchClick = () => {
    dispatch(toggleGptSeachView());
  };
  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
    console.log(e.target.value);
  };
  return (
    <div className=" bg-gradient-to-b from-black flex justify-between">
      <img className="w-40 px-8 py-4" src={homeLogo} alt="login-image" />
      {user && (
        <div className="flex p-2 justify-evenly">
          {showGptSearch && (
            <select
              className="px-4 py-2 m-2 rounded-lg bg-green-300 font-bold"
              onChange={handleLanguage}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifer} value={lang.identifer}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-2 py-2 m-2 rounded-lg bg-red-400 font-bold"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img className="w-12 h-12 " alt="userIcon" src={userAvatar} />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
