import { NETFLIX_LOGO } from "../utils/constants";

import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleLogoutButton = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <header className="absolute w-full header-container px-8 py-2 bg-linear-to-b from-black z-10 flex justify-between">
      <img className="w-40" src={NETFLIX_LOGO} alt="logo" />

      {user && (
        <div className="flex justify-between items-center gap-2">
          <span className="flex">
            Hello,&nbsp; 
            <p className="font-bold text-white">{user?.username}</p>
          </span>
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
