import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <div className="mt-5 mb-10">
      <h1 className="text-center text-white text-4xl mb-5 font-bold">
        Please Login
      </h1>

      <div className=" md:w-96 rounded-2xl mx-auto">
        <form className="bg-base-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto">
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
            <label className="block text-white text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              className="input input-bordered input-primary w-full"
            />

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
            <button>
              <FcGoogle />
            </button>
            <button>
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
