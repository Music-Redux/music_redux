/* eslint-disable */
import axios from "axios";
import React, { useState } from "react";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const isAuth = useIsAuthenticated();
  const navigate = useNavigate();
  const signIn = useSignIn();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    const data = new FormData(e.currentTarget);
    const loginData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(loginData);

    axios
      .post("http://127.0.0.1:8000/api/auth/login", loginData)
      .then((response) => {
        console.log(response.data.user);
        if (
          signIn({
            token: response.data.token,
            expiresIn: 10000,
            tokenType: "Bearer",
            authState: response.data.user,
          })
        ) {
          return navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  //   console.log(isAuth());
  if (isAuth()) {
    return navigate("/");
  }
  return (
    <div className="contact relative flex flex-col  overflow-hidden">
      <div className="w-full p-6 m-auto backdrop-blur-sm bg-[#BB264959] rounded-md shadow-xl shadow-rose-600/40 lg:max-w-xl mt-24">
        <h2 className="text-3xl font-semibold text-center uppercase text-white">
          Login
        </h2>
        <form className="ContactForm mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="email" className="text-white">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
              className="
          w-full
          block px-16 py-2 mt-2
          border-gray-300
          rounded-md
          shadow-sm
          focus:border-indigo-300
          focus:ring
          focus:ring-indigo-200
          focus:ring-opacity-50
        "
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="text-white">
              Password
            </label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
              className="
          w-full
          block px-16 py-2 mt-2
          border-gray-300
          rounded-md
          shadow-sm
          focus:border-indigo-300
          focus:ring
          focus:ring-indigo-200
          focus:ring-opacity-50

        "
            />
          </div>

          <button
            type="submit"
            className="
            w-full
            rounded-lg
            bg-[#1e1e1e]
            text-white
            hover:bg-[#fff]
            hover:text-[#1e1e1e]
            transition-colors
            duration-150
            mt-5
            font-bold
            mb-6
         "
          >
            Log In
          </button>
        </form>
        <a className="text-white" href="/register">
          New member ? Register here .
        </a>
      </div>
    </div>
  );
};
