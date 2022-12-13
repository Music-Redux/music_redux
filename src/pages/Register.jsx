/* eslint-disable */
import axios from "axios";
import React, { useState } from "react";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const isAuth = useIsAuthenticated();
  const navigate = useNavigate();
  const signIn = useSignIn();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    const data = new FormData(e.currentTarget);
    const registerData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(registerData);

    axios
      .post("http://127.0.0.1:8000/api/auth/register", registerData)
      .then((response) => {
        console.log(response.data);
        if (
          signIn({
            token: response.data.token,
            expiresIn: 10000,
            tokenType: "Bearer",
            authState: response.data.user,
          })
        ) {
          return navigate("/profile");
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  // console.log(isAuth());
  //   if (isAuth()) {
  //     return navigate("/");
  //   }
  return (
    <div className="contact relative flex flex-col  min-h-screen  overflow-hidden ml-80">
      <div className="auth-form-container w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 lg:max-w-xl ml-8">
        <h2 className="text-3xl font-semibold text-center uppercase ContactForm mt-6">
          Register
        </h2>
        <form className="register-form mt-6" onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="full Name"
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
          <label htmlFor="email">email</label>
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
          <label htmlFor="password">password</label>
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
          <button
            type="submit"
            className="
           rounded-lg
           transition-colors
           duration-150
           focus:shadow-outline
           hover:bg-indigo-800
           mt-5
         "
            style={{ backgroundColor: "#BB2649", color: "white" }}
          >
            Log In
          </button>
        </form>
        <a
          // className="link-btn"
          // onClick={() => props.onFormSwitch("/register")}
          href="/login"
        >
          Already have an account? Login here.
        </a>
      </div>
    </div>
  );
};
