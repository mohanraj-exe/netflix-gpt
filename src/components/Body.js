import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "./Login";
import Browse from "./Browse";
import Login from "./Login";

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
  return (
    <main className="main-container">
      <RouterProvider router={appRouter} />
    </main>
  );
};

export default Body;
