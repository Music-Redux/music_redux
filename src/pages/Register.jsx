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
        console.log(error.response);
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
            transition-colors
            duration-150
            hover:bg-[#fff]
            mt-5
            bg-[#1e1e1e]
            text-[#BB2649]
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
