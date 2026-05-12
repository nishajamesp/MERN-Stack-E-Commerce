import { useState } from "react";

import {
  useNavigate,
  Link,
} from "react-router-dom";

import axiosInstance from "../api/axiosInstance";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res =
        await axiosInstance.post(
          "/auth/login",
          {
            email,
            password,
          }
        );

      console.log(res.data);

      alert("Login Success");

      localStorage.setItem(
        "userInfo",
        JSON.stringify(res.data)
      );

      navigate("/");
    } catch (error) {
      console.log(error);

      alert(
        error.response?.data?.message ||
          "Login Failed"
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button className="bg-black text-white w-full py-3 rounded">
          Login
        </button>

        <p className="text-center mt-4">
          Don't have an account?
          <Link
            to="/register"
            className="text-blue-500 ml-2"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;