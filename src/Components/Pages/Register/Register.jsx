import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser } = useContext(authContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const url = form.get("url");
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters");
    } else if (!/[a-z]/.test(password)) {
      toast.error("Password should be at least one lowercase");
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password should be at least one uppercase");
    } else if (!/[0-9]/.test(password)) {
      toast.error("Password should be at least one number");
    } else {
      createUser(email, password, name, url)
        .then(() => {
          toast.success("Account created successfully");
        })
        .catch((error) => {
          toast.error("Already have an account");
        });
    }
  };

  console.log(showPassword);

  return (
    <div className="mt-5 mb-10">
      <h1 className="text-center text-white text-4xl mb-5 font-bold">
        Please Register
      </h1>

      <div className=" md:w-96 rounded-2xl mx-auto">
        <form
          onSubmit={handleRegister}
          className="bg-base-200 shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto"
        >
          <div>
            <ToastContainer></ToastContainer>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="fullname"
              required
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
              required
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
              required
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
                required
                className="input input-bordered input-primary w-full"
              />
              <p
                onClick={() => setShowPassword((pass) => !pass)}
                className="absolute top-11 right-2 text-xl text-white cursor-pointer "
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </p>
            </div>

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
