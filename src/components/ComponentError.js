import { useSelector } from "react-redux";

const ComponentError = () => {
  const error = useSelector((store) => store?.error);
  if (!error) return;
  return (
    <div className="flex flex-col justify-center items-center my-5">
      <h2 className="text-xl font-bold">Oops!!</h2>
      <h3>Status code: {error?.status}</h3>
      <p>Message: {error.message}</p>
    </div>
  );
};

export default ComponentError;
