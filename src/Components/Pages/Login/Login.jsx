import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";
import { authContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const { logIn, logInWithGoogle, logInWithGithub } = useContext(authContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    logIn(email, password)
      .then(() => {
        toast.success("Logged in successfull");

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  const handleloginWithGoogle = () => {
    logInWithGoogle()
      .then(() => {
        toast.success("Logged in successfull");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const handleloginWithGithub = () => {
    logInWithGithub()
      .then(() => {
        toast.success("Logged in successfull");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="mt-5 mb-10">
      <h1 className="text-center text-white text-4xl mb-5 font-bold">
        Please Login
      </h1>

      <div className=" md:w-96 rounded-2xl mx-auto">
        <ToastContainer></ToastContainer>
        <form
          onSubmit={handleLogin}
          className="bg-base-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto"
        >
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              className="input input-bordered input-primary w-full "
            />
          </div>
          <div className="mb-6">
            <div className="relative">
              <label className="block text-white text-sm font-bold mb-2">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                name="password"
                className="input input-bordered input-primary w-full"
              />
              <p
                onClick={() => setShowPassword((pass) => !pass)}
                className="absolute top-11 right-2 text-xl text-white cursor-pointer "
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </p>
            </div>

            <a href="#" className="text-primary ">
              <p className="mt-2">Forgot Password ?</p>
            </a>
            <p>
              Don't have an account ?
              <Link to={"/register"} className="text-primary font-bold mx-1">
                Register
              </Link>
            </p>
          </div>
          <div className="flex items-center justify-center mb-3">
            <button
              className="btn btn-primary text-white text-lg w-full"
              type="submit"
            >
              Login
            </button>
          </div>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-grow border-t border-gray-300"></div>
            <h1 className="text-gray-700 text-lg font-semibold bg-white px-4 py-1 rounded-full shadow-md">
              OR
            </h1>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          <div className="flex gap-5 justify-center text-2xl">
            <button onClick={handleloginWithGoogle} className="">
              <FcGoogle />
            </button>
            <button onClick={handleloginWithGithub}>
              {" "}
              <FaGithub />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
