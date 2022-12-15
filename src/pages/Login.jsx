/* eslint-disable */
import axios from "axios";
import React, { useState } from "react";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [message, setMessage] = useState("");
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
        console.log(error.response.data.message);
        setMessage(error.response.data.message);
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
        {message ? (
           <div id="alert-border-2" className="flex p-4 mb-4 bg-red-100 border-t-4 border-red-500 dark:bg-red-200" role="alert">
           <svg className="flex-shrink-0 w-5 h-5 text-red-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
           <div className="ml-3 text-sm font-medium text-red-700">
            {message} <a href="/register" className="font-semibold underline hover:text-red-800">register here</a>.
           </div>
           <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-red-100 dark:bg-red-200 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 dark:hover:bg-red-300 inline-flex h-8 w-8" data-dismiss-target="#alert-border-2" aria-label="Close">
             <span className="sr-only">Dismiss</span>
             <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
           </button>
         </div>
        ) : null}
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
