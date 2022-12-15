/* eslint-disable */
import React, { useState, useRef } from "react";
import ReactDom from "react-dom";
import axios from "axios";
import { useAuthUser } from "react-auth-kit";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#bb264989",
  borderRadius: "1.5rem",
  padding: "5rem",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(30, 30, 30, 0.95)",
  zIndex: 1000,
};

const EditProfile = ({ open, onClose, user }) => {
  const [name, setName] = useState(user.name);
  const [email, setemail] = useState(user.email);
  // const [pwd, setpwd] = useState();

  const data = new FormData();

  data.append("name", name);
  data.append("email", email);
  data.append("id", user.id);

  var config = {
    method: "post",
    url: `http://localhost:8000/api/profile/update`,
    headers: {},
    data: data,
  };

  const handleUpdateUser = (e) => {
    e.preventDefault();

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (!open) {
    return null;
  }
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div
        style={MODAL_STYLES}
        className="w-full p-6 m-auto backdrop-blur-sm bg-[#BB264959] rounded-md shadow-xl shadow-rose-600/40 lg:max-w-xl"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-2.5 text-white bg-transparent hover:bg-gray-200 hover:text-white rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-white dark:hover:text-[#BB2649]"
          data-modal-toggle="popup-modal"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>

        <div className="">
          <h3 className="font-semibold text-center uppercase text-white">
            Update Your Information
          </h3>


          <form onSubmit={handleUpdateUser} className="ContactForm mt-6">
            <div className="mb-2">
              <label htmlFor="floating_first_name" className="text-white">
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="floating_first_name"
                placeholder="Name.."
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
                required
              />

            </div>
            <div className="mb-2">
              <label htmlFor="floating_email" className="text-white">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                name="floating_email"
                placeholder="Email.."
                id="floating_email"
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
                required
              />
            </div>

            <div className="ml-24">
              <button
                data-modal-toggle="popup-modal"
                type="submit"
                className="
             rounded-m
             transition-colors
             duration-150
             hover:bg-[#fff]
             mt-2
             bg-[#1e1e1e]
             text-[#BB2649]
             font-bold
             p-4
             mr-12
             outline
             outline-[#1e1e1e]
             "
              >
                Update
              </button>
              <button
                data-modal-toggle="popup-modal"
                type="button"
                onClick={onClose}
                className="text-white outline outline-white p-4 rounded-m mt-2"
              >
                Cancel
              </button>
            </div>

          </form>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default EditProfile;
