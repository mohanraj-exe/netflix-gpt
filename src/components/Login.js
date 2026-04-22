import { useRef, useState } from "react";
import { NETFLIX_LOGIN_PAGE } from "../utils/constants";
import Header from "./Header";
import { validate } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const fullName = useRef(null);
  const email = useRef(null);
  const confirmPassword = useRef(null);
  const password = useRef(null);

  // console.log("hello world");
  // console.log(process.env.REACT_APP_FIREBASE_API_KEY);

  const toggleLoginInForm = () => {
    setIsLoginForm(!isLoginForm);
    setErrorMessage(null);
  };

  const handleButtonClick = () => {
    // console.log(e);
    const message = validate(
      isLoginForm,
      email.current.value,
      password.current.value,
      !isLoginForm ? confirmPassword.current.value : null,
      !isLoginForm ? fullName.current.value : null,
    );

    // console.log(message);
    setErrorMessage(message);

    if (message) return;

    if (!isLoginForm) {
      // Create account logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Login logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed In
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          // console.log(error.code, error.message);
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="login-container relative">
      <Header />

      <img
        className="absolute opacity-90 bg-repeat-y"
        src={NETFLIX_LOGIN_PAGE}
        alt="netflix_login_page_img"
      />

      <form
        className="absolute w-4/12 p-12 bg-black/80 my-26 mx-auto right-0 left-0 text-white rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isLoginForm ? "Login" : "Create account"}
        </h1>

        {!isLoginForm && (
          <input
            className="px-2 py-4 my-4 w-full bg-gray-700"
            ref={fullName}
            type="text"
            placeholder="Full name"
          />
        )}

        <input
          className="px-2 py-4 my-4 w-full bg-gray-700"
          ref={email}
          type="email"
          name="Email"
          placeholder="Email address"
        />

        <input
          className="px-2 py-4 my-4 w-full bg-gray-700"
          ref={password}
          type="password"
          name="Password"
          placeholder="Password"
        />

        {!isLoginForm ? (
          <input
            className="px-2 py-4 my-4 w-full bg-gray-700"
            ref={confirmPassword}
            type="password"
            name="Confirm Password"
            placeholder="Confirm Password"
          />
        ) : (
          <></>
        )}

        <p className="text-red-600 font-bold text-lg">{errorMessage}</p>

        <button
          className="bg-red-600 w-full p-4 my-5 rounded-lg"
          onClick={handleButtonClick}
        >
          {isLoginForm ? "Login" : "Create account"}
        </button>

        <p className="text-sm cursor-pointer" onClick={toggleLoginInForm}>
          {isLoginForm
            ? "New to Netflix? Create account now!"
            : "Already have an account? Login"}
        </p>
      </form>
    </div>
  );
};

export default Login;
