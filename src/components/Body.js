import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Login";
import Browse from "./Browse";
import Login from "./Login";
import MainContainer from "./MainContainer";
import WatchingMovie from "./WatchingMovie";
// import WatchingContainer from "./WatchingContainer";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/watch/:id",
    element: <WatchingMovie />,
  },
]);

const Body = () => {
  return (
    <main className="main-container">
      <RouterProvider router={appRouter} />
    </main>
  );
};

export default Body;
