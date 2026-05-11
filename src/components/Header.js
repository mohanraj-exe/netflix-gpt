import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";

import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

import { useEffect } from "react";
import { auth } from "../utils/firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice.js";
import { toggleGptSearchView } from "../utils/gptSlice.js";
import { changeLanguage } from "../utils/configSlice.js";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleLogoutButton = () => {
    signOut(auth)
      .then()
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    let subscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, photoURL, displayName } = user;
        dispatch(
          addUser({
            email: email,
            uid: uid,
            photoURL: photoURL,
            username: displayName,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    let unsubscribe = subscribe;
    return () => unsubscribe();
  }, []);

  return (
    <header className="min-w-full absolute header-container px-8 py-2 bg-linear-to-b from-black z-10 flex justify-between">
      <img className="w-40" src={NETFLIX_LOGO} alt="logo" />

      {user && (
        <div className="flex justify-between items-center gap-3">

          {showGptSearch && (
            <select onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
              ))}
            </select>
          )}

          <button
            className="bg-black text-orange-500 px-6 py-2 rounded-md cursor-pointer"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>

          <img
            className="user-avatar border-2 border-gray-100 border-solid rounded-full w-12 h-12"
            src={user?.photoURL}
          />
          <button
            className="font-bold text-[#DC143C] cursor-pointer"
            onClick={handleLogoutButton}
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
