import React from "react";

const Register = () => {
  return (
    <div className="mt-5 mb-10">
      <h1 className="text-center text-white text-4xl mb-5 font-bold">
        Please Register
      </h1>

      <div className=" md:w-96 rounded-2xl mx-auto">
        <form className="bg-base-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto">
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="username"
            >
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
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="username"
            >
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
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              name="password"
              className="input input-bordered input-primary w-full"
            />

            <a href="#" className="text-white">
              <p>Forgot Password?</p>
            </a>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="btn btn-primary text-white text-lg"
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
