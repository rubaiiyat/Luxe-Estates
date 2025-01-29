import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="mt-5 mb-10">
      <h1 className="text-center text-white text-4xl mb-5 font-bold">
        Please Register
      </h1>

      <div className=" md:w-96 rounded-2xl mx-auto">
        <form className="bg-base-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto">
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="fullname"
              className="input input-bordered input-primary w-full "
            />
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Photo *Url
            </label>
            <input
              type="url"
              placeholder="Enter The Photo Url"
              name="photoUrl"
              className="input input-bordered input-primary w-full "
            />
          </div>
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

            <p className="mt-2">
              Already have an account ?
              <Link to={"/login"} className="text-primary font-bold mx-1">
                Login
              </Link>
            </p>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="btn btn-primary text-white text-lg w-full"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
