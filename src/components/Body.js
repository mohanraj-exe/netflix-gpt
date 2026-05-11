import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Login";
import Browse from "./Browse";
import Login from "./Login";
import MainContainer from "./MainContainer";
import WatchingMovie from "./WatchingMovie";
import GptSearchPage from "./GptSearchPage";
import Error from "./RouteError";
import ComponentError from "./ComponentError";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <Error />
  },
  {
    path: "/browse",
    element: <Browse />,
    errorElement: <Error />
  },
  {
    path: "/watch/:id",
    element: <WatchingMovie />,
  },
  {
    path: "/error",
    element: <ComponentError />
  }
]);

const Body = () => {
  return (
    <main className="main-container">
      <RouterProvider router={appRouter} />
    </main>
  );
};

export default Body;
