/* eslint-disable */
import axios from "axios";
import React, { useState, useRef } from "react";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  // const [file, setFile] = useState();

  const [imgUrl, setImgUrl] = useState(null);
  const [progresspercent, setProgresspercent] = useState(0);
  const inputRef = useRef(null);

  const isAuth = useIsAuthenticated();
  const navigate = useNavigate();
  const signIn = useSignIn();
  const handleClick = () => {
    // 👇️ open file input box on click of other element
    inputRef.current.click();
  };
  const handleFileChange = (event) => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    // console.log('fileObj is', fileObj);

    // 👇️ reset file input
    event.target.value = null;

    // 👇️ is now empty
    // console.log(event.target.files);

    // 👇️ can still access file object here
    // console.log(fileObj);
    // console.log(fileObj.name);

    const storageRef = ref(storage, `files/${fileObj.name}`);
    const uploadTask = uploadBytesResumable(storageRef, fileObj);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
        console.log(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);

          console.log(downloadURL);
          //TODO: save url to database
        });
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const registerData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      avatar: imgUrl,
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
        console.log(error.response.data);
        setMessage(error.response.data.message);
      });
  };
  // console.log(isAuth());
  //   if (isAuth()) {
  //     return navigate("/");
  //   }
  return (
    <div className="contact relative flex flex-col  overflow-hidden">
      <div className="w-full p-6 m-auto backdrop-blur-sm bg-[#BB264959] rounded-md shadow-xl shadow-rose-600/40 lg:max-w-xl mt-4">
        <h2 className="text-3xl font-semibold text-center uppercase text-white">
          Register
        </h2>
        {message ? (
          <div
            id="alert-border-2"
            className="flex p-4 mb-4 bg-red-100 border-t-4 border-red-500 dark:bg-red-200"
            role="alert"
          >
            <svg
              className="flex-shrink-0 w-5 h-5 text-red-700"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <div className="ml-3 text-sm font-medium text-red-700">
              {message}.
            </div>
            <button
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 bg-red-100 dark:bg-red-200 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 dark:hover:bg-red-300 inline-flex h-8 w-8"
              data-dismiss-target="#alert-border-2"
              aria-label="Close"
            >
              <span className="sr-only">Dismiss</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        ) : null}
        <form className="ContactForm mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="name" className="text-white">
              Full name
            </label>
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
          </div>
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
          <div className="mb-2">
            <label className="text-white">Profile picture</label>
            <br />
            <br />
            <img
              onClick={handleClick}
              alt="..."
              src={imgUrl}
              className=" rounded-lg w-1/4"
            />
            <input
              style={{ display: "none" }}
              ref={inputRef}
              type="file"
              onChange={handleFileChange}
              className="
          w-full
          block px-16 py-2 mt-2
          bg-[#fff]
     

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
            transition-colors
            duration-150 
            bg-[#1e1e1e]
            text-[#BB2649]
            hover:bg-[#fff]
            hover:text-[#1e1e1e]
            mt-5
            font-bold
            mb-6
          "
          >
            Log In
          </button>
        </form>
        <a className="text-white" href="/login">
          Already have an account? Login here.
        </a>
      </div>
    </div>
  );
};
