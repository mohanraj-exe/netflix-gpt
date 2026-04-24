import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Login";
import Browse from "./Browse";
import Login from "./Login";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "../utils/firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice.js";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log("User data starts fetching...");
      // console.log(user);

      if (user) {
        // console.log("User found!");
        const { email, uid, photoURL, displayName } = user;
        dispatch(
          addUser({
            email: email,
            uid: uid,
            photoURL: photoURL,
            username: displayName,
          }),
        );
      } else {
        // console.log("User signed out");
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <main className="main-container">
      <RouterProvider router={appRouter} />
    </main>
  );
};

export default Body;
