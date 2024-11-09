import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
// iconst
import { FaGoogle } from "react-icons/fa";
const Register = () => {
  // error message state
  const [message, setMessage] = useState("");
  // handle login fnc
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // handle register
  const onSubmit = (data) => {
    const email = data.email;
    const pass = data.password;
  };
  // handle google login fnc
  const handleGoogleLogin = () => {};
  return (
    <div className="h-[calc(100vh-120px)] flex justify-center items-center">
      <div className="w-full lg:max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
        <h2 className="text-xl font-semibold mb-4">Please Register</h2>
        {/* login form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* email */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              className="focus:outline-none focus:shadow shadow appearance-none border rounded w-full py-2 px-3 leading-tight "
            />
          </div>
          {/* password */}
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="focus:outline-none focus:shadow shadow appearance-none border rounded w-full py-2 px-3 leading-tight "
            />
          </div>
          {message && (
            <p className="text-xs italic mb-3 text-red-500">{message}</p>
          )}
          {/* button */}
          <div>
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none">
              Register
            </button>
          </div>
        </form>
        <p className="mt-4 align-baseline font-medium text-sm">
          Already have account? Please{" "}
          <Link
            className="text-blue-500 hover:text-blue-700 hover:underline"
            to={"/login"}
          >
            Login{" "}
          </Link>
        </p>
        {/* google signin */}
        <div className="mt-4 ">
          <button
            onClick={handleGoogleLogin}
            className="flex flex-wrap justify-center bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none gap-3 items-center w-full"
          >
            <FaGoogle />
            Sign up with google
          </button>
        </div>
        <p className="mt-5 text-center text-gray-500 text-xs">
          @ 2025 Book Heaven. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Register;
