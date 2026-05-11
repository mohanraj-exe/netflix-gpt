import { Link, useRouteError } from "react-router";

const RouteError = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col justify-center items-center my-5">
      <h2 className="text-xl font-bold">Oops!!</h2>
      <h3>{error?.status + " - " + error?.statusText}</h3>
      <p className="my-4">Message: {error.error?.message}</p>
      <button className="bg-black text-orange-500 px-6 py-2 rounded-md cursor-pointer">
        Go back to <Link to={"/"}>Home</Link>
      </button>
    </div>
  );
};

export default RouteError;
