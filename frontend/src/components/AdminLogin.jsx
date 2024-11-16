import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import getBaseURL from "../utils/baseURL";
import { toast } from "react-toastify";
const AdminLogin = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${getBaseURL()}/api/auth/admin`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const auth = await response.data;
      if (auth.token) {
        localStorage.setItem("token", auth.token);
        setTimeout(() => {
          localStorage.removeItem("token");
          toast.info("Token has been expired. Please login again");
          navigate("/");
        }, 3600 * 8000);
      }
      toast.success("Admin Login successful");
      navigate("/dashboard");
    } catch (error) {
      setMessage("Please provide a valid email and password");
      console.log("error login ", error);
    }
  };
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full lg:max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8">
        <h2 className="text-xl font-semibold mb-4">Admin Login</h2>
        {/* login form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* email */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Username
            </label>
            <input
              {...register("username", { required: true })}
              type="text"
              id="username"
              name="username"
              placeholder="username"
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
              Login
            </button>
          </div>
        </form>
        <p className="mt-5 text-center text-gray-500 text-xs">
          @ 2025 Book Heaven. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
